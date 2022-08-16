import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BlogPostDto } from "../../types/BlogPostDto";

export interface IUseBlogPostsParams {
  page: number;
  pageSize: number;
}

interface IUseBlogPosts {
  query: UseQueryResult<Array<BlogPostDto>, Error>;
}

const useBlogPosts = (props: IUseBlogPostsParams): IUseBlogPosts => {
  const url = new URL("https://willjenner.azurewebsites.net/api/GetPosts");
  url.searchParams.append("page", props.page.toString());
  url.searchParams.append("size", props.pageSize.toString());

  const fetchBlog = async (): Promise<Array<BlogPostDto>> => {
    try {
      var response = await fetch(url.toString(), {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const data = await response.text();
      console.log(data);
      if (response.ok) {
        let t = JSON.parse(data);

        return t as Array<BlogPostDto>;
      } else throw new Error("No result");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const query = useQuery<Array<BlogPostDto>, Error>(
    ["blog", props.page, props.pageSize],
    fetchBlog
  );

  return { query };
};

export default useBlogPosts;
