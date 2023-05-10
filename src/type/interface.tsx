export interface PostContent {
  title: string;
  image: string;
  content: string;
  date: string;
  excerpt: string;
  slug: string;
  isFeatured: string;
}

export interface ProjectContent {
  id: string;
  title: string,
  subTitle: string,
  image: string[],
  content: string,
  subContent: string,
  gitHub: string,
  url: string,
  stack: string,
  deployment: string,
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

export interface GetAboutMe {
  key: string;
  value: string;
  image: string;
}

export interface SkillsContent {
  category: "Frontend" | "Deploy" | "Database" | "VerControl";
  data: SkillsData[];
}

export interface SkillsData {
  skillImage: string;
}
