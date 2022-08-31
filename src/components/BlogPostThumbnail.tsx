import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/BlogPost";

interface IBlogPostTeaserProps {
  blogPost: BlogPost;
}

const BlogPostThumbnail = (props: IBlogPostTeaserProps) => {
  const datePublished = dayjs(props.blogPost.timeStamp);

  return (
    <article className="border-solid border-black border-2">
      <header>
        <h3 className="text-xl">
          <Link to={`/blog/${props.blogPost.id}`} className={"hover:underline"}>
            {props.blogPost.title}
          </Link>
        </h3>
        <span className="italic text-sm">
          Published{" "}
          <time dateTime={datePublished.toISOString()}>
            {datePublished.format("YYYY-MM-DD")}
          </time>
        </span>
      </header>

      <p>{props?.blogPost?.teaser}</p>
    </article>
  );
};

export default BlogPostThumbnail;
