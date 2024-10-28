import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  OrderList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../Components";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.warning("You must be logged in to view orders");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const resp = await queryClient.ensureQueryData(ordersQuery(params, user));
      return { orders: resp.data.data, meta: resp.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "There was an error while placing your order";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle title="Please Make An Order" />;
  }
  return (
    <>
      <SectionTitle title="Your Orders" />
      <OrderList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
