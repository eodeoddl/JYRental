import { createContext, useCallback, useContext } from "react";

type Action =
  | "addToCart"
  | "deleteFromCart"
  | "setQuantity"
  | "getByType"
  | "getLatest";

type Payload = {
  productId?: number;
  quantity?: number;
  purchaseType?: "rent" | "buy";
  filterOption?: "rent" | "buy";
};

const CartContext = createContext(new Map());
export const useCartContext = () => useContext(CartContext);
export const useLatestItem = () =>
  Array.from(useCartContext(), ([productId]) => productId).at(-1);

export default function useCart() {
  const context = useCartContext();
  const dispatch = useCallback((action: Action, payload: Payload) => {
    const { productId, quantity, purchaseType, filterOption } = payload;
    const item = context.get(productId);

    switch (action) {
      case "addToCart": {
        if (context.has(productId)) context.delete(productId);
        return context.set(productId, { ...item, purchaseType });
      }
      case "deleteFromCart": {
        return context.delete(productId);
      }
      case "setQuantity": {
        return context.set(productId, { quantity });
      }
      case "getByType": {
        return Array.from(context, ([productId, value]) => ({
          productId: Number(productId),
          value,
        })).filter(({ value }) => value.purchaseType === filterOption);
      }
      case "getLatest": {
        return Array.from(context, ([productId]) => productId).at(-1);
      }
      default:
        throw Error("");
    }
  }, []);

  return dispatch;
}
