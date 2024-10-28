import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import CartItem from "./CartItem";
const CartItemList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};
export default CartItemList;
