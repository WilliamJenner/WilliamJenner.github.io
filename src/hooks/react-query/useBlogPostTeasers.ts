import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BlogPostTeaser } from "../../types/BlogPostTeaser";
import { PaginationOrder } from "../usePagination";

export interface IUseBlogPostsParams {
  page: number;
  pageSize: number;
  order: PaginationOrder;
}

interface IUseBlogPosts {
  query: UseQueryResult<BlogPostTeaser, Error>;
}

const useBlogPostTeasers = (props: IUseBlogPostsParams): IUseBlogPosts => {
  const url = new URL("https://willjenner.azurewebsites.net/api/GetTeasers");
  url.searchParams.append("page", props.page.toString());
  url.searchParams.append("size", props.pageSize.toString());
  url.searchParams.append("order", props.order.toString());

  const fetchBlog = async (): Promise<BlogPostTeaser> => {
    try {
      var response = await fetch(url.toString(), {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const data = await response.text();

      if (response.ok) {
        let t = JSON.parse(data);

        return t as BlogPostTeaser;
      } else throw new Error("No result");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const query = useQuery<BlogPostTeaser, Error>(
    ["blog-teasers", props.page, props.pageSize, props.order],
    fetchBlog
  );

  return { query };
};

export default useBlogPostTeasers;
