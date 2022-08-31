import * as React from "react";

export interface IUsePaginationParams {
  initialPage: number;
  initialPageSize: number;
}

interface IUsePagination {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  nextPage: VoidFunction;
  previousPage: VoidFunction;
  setPageSize: (pageSize: number) => void;
}

const usePagination = (props: IUsePaginationParams): IUsePagination => {
  const [page, setPage] = React.useState(props.initialPage);
  const [pageSize, setPageSize] = React.useState(props.initialPageSize);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const previousPage = () => {
    setPageSize(
      (prevState) => (prevState - 1 >= 0 ? prevState - 1 : prevState) // check if -1 will go below 0, so we done
    );
  };

  return { page, pageSize, setPage, nextPage, previousPage, setPageSize };
};

export default usePagination;
