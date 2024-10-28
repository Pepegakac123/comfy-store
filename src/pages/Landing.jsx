import { FeaturedProducts, Hero } from "../Components";
import { customFetch } from "../utils";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch.get(url),
};

export const loader = (queryClient) => async () => {
  const { data } = await queryClient.ensureQueryData(featuredProductsQuery);

  try {
    return { products: data.data };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
