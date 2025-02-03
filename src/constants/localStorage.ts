import { CartType } from './cart';

export const LOCAL_KEYS = {
  DARK_MODE: 'isDark',
  CART: 'cart',
} as const;

export type LocalState = {
  isDark: boolean;
  cart: CartType;
};

export type LocalKey = keyof LocalState;

export type LocalValue<K extends LocalKey> = LocalState[K];
