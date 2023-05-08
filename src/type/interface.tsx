export interface Post {
  title: string;
  content: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
  isFeatured: string;
}

export interface ReqBody {
  email: string;
  name: string;
  message: string;
}

export interface ResBody {
  email: string;
  name: string;
  message: string;
  id?: object;
}

export interface NotificationProps {
  title: string;
  message: string;
  status: Status;
}

export type Status = "success" | "error" | "pending" | string;
