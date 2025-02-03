export const CATEGORIES = {
  fashion: '패션',
  accessory: '액세서리',
  digital: '디지털',
} as const;

export const CATEGORY_MAP = {
  fashion: ["men's clothing", "women's clothing"],
  digital: ['electronics'],
  accessory: ['jewelery'],
} as const;

export type CategoryKey = keyof typeof CATEGORY_MAP;
export type CategoryValue = (typeof CATEGORY_MAP)[CategoryKey][number];

const CATEGORY_REVERSE = Object.fromEntries(
  Object.entries(CATEGORY_MAP).map(([k, v]) => [
    v[0],
    CATEGORIES[k as CategoryKey],
  ])
);

export const CATEGORY_PATH = {
  ...CATEGORY_REVERSE,
  "women's clothing": '패션',
};

export interface Rating {
  count: number;
  rate: number;
}

export interface Product {
  category: CategoryValue;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}
