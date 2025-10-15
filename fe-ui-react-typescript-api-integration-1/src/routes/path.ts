export const ROUTE_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  PRODUCT_LIST: "/products",
  PRODUCT_DETAIL: "/products/:id",
} as const;

export type PathType = keyof typeof ROUTE_PATHS;
