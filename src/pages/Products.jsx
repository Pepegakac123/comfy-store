import { Filters, ProductsContainer, PaginationContainer } from "../Components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch("/products", {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    const { data } = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );

    try {
      return { products: data.data, meta: data.meta, params };
    } catch (error) {
      console.log(error);
      return error;
    }
  };

const Products = () => {
  const { products, meta } = useLoaderData();
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
