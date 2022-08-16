import useBlogPosts from "../hooks/react-query/useBlogPosts";
import BlogPostTeaser from "./BlogPostTeaser";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const x = useBlogPosts({ page: 0, pageSize: 10 });

  return (
    <>
      <main className="container mx-auto">
        <header>
          <h1 className="text-4xl">willjenner.uk</h1>
        </header>

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
      </main>

      <footer className="container mx-auto">
        <p>footer</p>
      </footer>
    </>
  );
};

export default HomePage;
