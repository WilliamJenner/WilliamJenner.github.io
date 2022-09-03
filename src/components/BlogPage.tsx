import dayjs from "dayjs";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import useBlogPost from "../hooks/react-query/useBlogPost";

interface IBlogPageProps {}

const BlogPage = (props: IBlogPageProps) => {
  const { id } = useParams();
  const { query } = useBlogPost({ id: id ?? "" });

  const datePublished = dayjs(query.data?.timeStamp);

  return (
    <>
      {query.isFetched && (
        <article className="prose md:prose-lg prose-slate dark:prose-invert">
          <header className="border-b mb-4">
            <h1>{query.data?.title}</h1>
            <p>
              Published on{" "}
              <time dateTime={datePublished.toISOString()}>
                {datePublished.format("DD/MM/YYYY")}
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
