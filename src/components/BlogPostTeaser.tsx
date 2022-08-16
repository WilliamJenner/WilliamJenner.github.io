import dayjs from "dayjs";
import { BlogPostDto } from "../types/BlogPostDto";

interface IBlogPostTeaserProps {
  blogPost: BlogPostDto;
}

const BlogPostTeaser = (props: IBlogPostTeaserProps) => {
  const datePublished = dayjs(props.blogPost.timeStamp);

  return (
    <article className="border-solid border-black border-2">
      <header>
        <h3 className="text-xl">
          <a href={`blog/${props.blogPost.id}`} className={"hover:underline"}>
            {props.blogPost.title}
          </a>
        </h3>
        <span className="italic text-sm">
          Published{" "}
          <time dateTime={datePublished.toISOString()}>
            {datePublished.format("YYYY-MM-DD")}
          </time>
        </span>
      </header>

      <p>{props.blogPost.content?.substring(0, 45)}...</p>
    </article>
  );
};

export default BlogPostTeaser;
