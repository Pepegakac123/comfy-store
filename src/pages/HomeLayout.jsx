import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../Components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
