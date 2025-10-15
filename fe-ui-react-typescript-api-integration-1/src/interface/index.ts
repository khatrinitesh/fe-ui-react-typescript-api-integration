import type { ReactElement, ReactNode } from "react";

export interface RouteItem {
  path: string;
  element: ReactElement;
  protected: boolean;
  title: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ILayoutProps {
  children: ReactNode;
}
