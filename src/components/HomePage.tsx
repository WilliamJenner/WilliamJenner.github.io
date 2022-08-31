import useBlogPosts from "../hooks/react-query/useBlogPostTeasers";
import usePagination from "../hooks/usePagination";
import BlogPostTeaser from "./BlogPostThumbnail";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const { page, pageSize } = usePagination({
    initialPage: 0,
    initialPageSize: 10,
  });
  const x = useBlogPosts({ page, pageSize });

  return (
    <>
      <section>
        <p>Welcome to blog</p>
      </section>

      <section>
        <header>
          <h2 className="text-2xl">Blog posts</h2>
        </header>

        <div className="grid grid-cols-3 gap-8 my-2">
          {x.query.data?.map((post) => (
            <BlogPostTeaser blogPost={post} key={post.id} />
          ))}
        </div>

        <button> {"<"} </button>
        <button className="bg-blue-200">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button> {">"} </button>
      </section>
    </>
  );
};

export default HomePage;
