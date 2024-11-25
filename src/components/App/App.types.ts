export type Image = {
  id: string;
  alt_description: string; //опис колекції
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
};
