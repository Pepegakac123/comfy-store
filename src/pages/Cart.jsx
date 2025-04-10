import { useSelector } from "react-redux";
import { CartItemList, SectionTitle, CartTotals } from "../Components";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCar = useSelector((state) => state.cartState.numItemsInCar);
  if (numItemsInCar === 0) {
    return <SectionTitle title="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle title="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed To Checkout
            </Link>
          ) : (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
