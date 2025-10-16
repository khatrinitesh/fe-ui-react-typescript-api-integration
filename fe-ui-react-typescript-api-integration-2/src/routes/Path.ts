// src/routes/Path.ts
export const Path = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  SERVICES: "/services",
  DASHBOARD: "/dashboard",
  NOT_FOUND: "*",
} as const;

export type PathType = (typeof Path)[keyof typeof Path];
