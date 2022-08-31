import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BlogPost } from "../../types/BlogPost";

export interface IUseBlogPostsParams {
  id: string;
}

interface IUseBlogPosts {
  query: UseQueryResult<BlogPost, Error>;
}

const useBlogPost = (props: IUseBlogPostsParams): IUseBlogPosts => {
  const url = new URL("https://willjenner.azurewebsites.net/api/GetBlog");
  url.searchParams.append("id", props.id);

  const fetchBlog = async (): Promise<BlogPost> => {
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

        return t as BlogPost;
      } else throw new Error("No result");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const query = useQuery<BlogPost, Error>(["blog", props.id], fetchBlog);

  return { query };
};

export default useBlogPost;
