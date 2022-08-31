import * as React from "react";
export type PaginationOrder = "asc" | "desc";

export interface IUsePaginationParams {
  initialPage: number;
  initialPageSize: number;
  intitialOrder: PaginationOrder;
}

interface IUsePagination {
  page: number;
  pageSize: number;
  totalPages: number;
  order: PaginationOrder;
  nextPage: VoidFunction;
  previousPage: VoidFunction;
  updatePage: (potentialPage: number) => void;
  setPageSize: (pageSize: number) => void;
  updateTotalSize: (totalSize: number) => void;
  hasPage: (page: number, ascending: boolean) => boolean;
  setOrder: (order: PaginationOrder) => void;
}

const usePagination = (props: IUsePaginationParams): IUsePagination => {
  const [page, setPage] = React.useState(props.initialPage);
  const [pageSize, setPageSize] = React.useState(props.initialPageSize);
  const [totalSize, setTotalSize] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(1);
  const [order, setOrder] = React.useState<PaginationOrder>(
    props.intitialOrder
  );

  const onPaginationChange = () => {
    setTotalPages(Math.round(totalSize / pageSize));
  };

  React.useEffect(onPaginationChange, [totalSize, pageSize]);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const previousPage = () => {
    setPageSize(
      (prevState) => (prevState - 1 >= 0 ? prevState - 1 : prevState) // check if -1 will go below 0, so we done
    );
  };

  const updatePage = (potentialPage: number) => {
    const isGreaterThanZero = potentialPage >= 0;
    const isSafeToTotal = potentialPage <= totalPages;

    const newPage = isGreaterThanZero
      ? isSafeToTotal
        ? potentialPage
        : totalPages
      : 0;

    console.log(potentialPage);
    console.log(isGreaterThanZero, isSafeToTotal, newPage);

    setPage(newPage);
  };

  const hasPage = (potentialPage: number, ascending: boolean) => {
    if (ascending) {
      console.log("higher", potentialPage);

      return !(potentialPage > totalPages);
    } else {
      return potentialPage < 0;
    }
  };

  const updateTotalSize = (totalSize: number) => {
    setTotalSize(totalSize);
  };

  console.log({
    page,
    pageSize,
    totalSize,
    totalPages,
  });

  return {
    page,
    pageSize,
    totalPages,
    order,
    nextPage,
    previousPage,
    updatePage,
    setPageSize,
    updateTotalSize,
    hasPage,
    setOrder,
  };
};

export default usePagination;
