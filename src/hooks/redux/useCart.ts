import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, remove } from 'store/cartSlice';
import { RootState } from 'store/index';
import { setLocalState } from '@utils/helper';

const useCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);

  const addProduct = useCallback((id: string) => {
    dispatch(add(id));
  }, []);
  const decrementProduct = useCallback((id: string) => {
    dispatch(decrement(id));
  }, []);
  const removeProduct = useCallback((id: string) => {
    dispatch(remove(id));
  }, []);

  useEffect(() => {
    setLocalState('cart', cart);
  }, [cart]);

  return { addProduct, decrementProduct, removeProduct, cart };
};

export default useCart;
