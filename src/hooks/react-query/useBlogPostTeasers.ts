import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BlogPostTeaser } from "../../types/BlogPostTeaser";

export interface IUseBlogPostsParams {
  page: number;
  pageSize: number;
}

interface IUseBlogPosts {
  query: UseQueryResult<Array<BlogPostTeaser>, Error>;
}

const useBlogPostTeasers = (props: IUseBlogPostsParams): IUseBlogPosts => {
  const url = new URL("https://willjenner.azurewebsites.net/api/GetTeasers");
  url.searchParams.append("page", props.page.toString());
  url.searchParams.append("size", props.pageSize.toString());

  const fetchBlog = async (): Promise<Array<BlogPostTeaser>> => {
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

        return t as Array<BlogPostTeaser>;
      } else throw new Error("No result");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const query = useQuery<Array<BlogPostTeaser>, Error>(
    ["blog-teasers", props.page, props.pageSize],
    fetchBlog
  );

  return { query };
};

export default useBlogPostTeasers;
