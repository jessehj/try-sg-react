export interface ContentType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CardProps {
  key: number;
  userId: number;
  title: string;
  body: string;
}

export interface PrintCardPropsType {
  data: ContentType[];
}
