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
    <>
      <section className="mb-4">
        <header>
          <h2 className="text-2xl">About me</h2>
        </header>
        <p>Im will</p>
      </section>

      <section>
        <header>
          <h2 className="text-2xl">Blog posts</h2>
        </header>

        <div className="grid grid-cols-2 gap-8 my-2">
          {blogPostsQuery.data?.blogs.map((post) => (
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
    </>
  );
};

export default HomePage;
