import { PaginationOrder } from "../hooks/usePagination";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  order: PaginationOrder;
  hasPage: (page: number, ascending: boolean) => boolean;
  onPageChange: (page: number) => void;
  onOrderChange: (order: PaginationOrder) => void;
}

const Pagination = (props: IPaginationProps) => {
  return (
    <div className="flex flex-row gap-2">
      Current page: {props.currentPage + 1} of {props.totalPages}
      <select
        onChange={(event) => {
          props.onPageChange(Number(event.target.value) - 1);
        }}
        value={props.currentPage + 1}
      >
        {Array.from(Array(props.totalPages).keys()).map((key) => {
          return (
            <option
              key={key + 1}
              value={key + 1}
              selected={key + 1 === props.currentPage}
            >
              {key + 1}
            </option>
          );
        })}
      </select>
      <select
        onChange={(event) => {
          props.onOrderChange(event.target.value as PaginationOrder);
        }}
        value={props.order}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Pagination;
