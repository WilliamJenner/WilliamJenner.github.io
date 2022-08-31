import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import useBlogPost from "../hooks/react-query/useBlogPost";

interface IBlogPageProps {}

const BlogPage = (props: IBlogPageProps) => {
  const { id } = useParams();
  const { query } = useBlogPost({ id: id ?? "" });

  return (
    <>
      {query.isFetched && (
        <article className="prose prose-slate dark:prose-invert">
          <header>
            <h1>{query.data?.title}</h1>
            <p>
              Published on{" "}
              <time
                dateTime={dayjs(query.data?.timeStamp).format("YYYY-MM-DD")}
              >
                {dayjs(query.data?.timeStamp).format("DD/MM/YYYY")}
              </time>
            </p>
            <p>{query.data?.teaser}</p>
          </header>
          <ReactMarkdown children={query?.data?.content ?? ""} />
        </article>
      )}
    </>
  );
};

export default BlogPage;
