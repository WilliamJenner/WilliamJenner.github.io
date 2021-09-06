export type Details = {
  summary: string;
  child: ListItem[];
};

export type ListItem = {
  li: Details | ListItem[] | string;
};
