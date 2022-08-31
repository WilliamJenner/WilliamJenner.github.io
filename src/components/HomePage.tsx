import { useEffect } from "react";
import useBlogPosts from "../hooks/react-query/useBlogPostTeasers";
import usePagination from "../hooks/usePagination";
import BlogPostTeaser from "./BlogPostThumbnail";
import Pagination from "./Pagination";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const {
    page,
    pageSize,
    totalPages,
    order,
    updatePage,
    updateTotalSize,
    hasPage,
    setOrder,
  } = usePagination({
    initialPage: 0,
    initialPageSize: 10,
    intitialOrder: "asc",
  });

  const { query: blogPostsQuery } = useBlogPosts({
    page,
    pageSize,
    order: order,
  });

  useEffect(() => {
    updateTotalSize(blogPostsQuery.data?.totalSize ?? 0);
  }, [blogPostsQuery.data?.totalSize]);

  return (
    <div className="flex flex-col gap-2">
      <section className="flex flex-col gap-2">
        <header>
          <h2 className="text-2xl">About me</h2>
        </header>
        <p>
          Hi, I'm Will. I'm a fullstack Software Engineer. Day to day I work
          with the web.
        </p>
        <p>I work with technologies such as:</p>
        <ul className="list-disc pl-6">
          <li>React</li>
          <li>C# / ASP.NetCore / Net 6.0</li>
          <li>TypeScript</li>
          <li>SQL</li>
        </ul>
        <p>Right now this website is under construction.</p>
      </section>

      <section className="flex flex-col gap-2 md:gap-4">
        <header>
          <h2 className="text-2xl">Blog posts</h2>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {blogPostsQuery.data?.blogs?.map((post) => (
            <BlogPostTeaser blogPost={post} key={post.id} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          hasPage={hasPage}
          totalPages={totalPages}
          order={order}
          onPageChange={(page) => {
            updatePage(page);
          }}
          onOrderChange={(order) => {
            setOrder(order);
          }}
        />
      </section>
    </div>
  );
};

export default HomePage;
