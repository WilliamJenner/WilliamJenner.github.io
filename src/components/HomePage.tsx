import useBlogPosts from "../hooks/react-query/useBlogPosts";

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const x = useBlogPosts({ page: 0, pageSize: 10 });

  return (
    <main>
      <h1 className="text-4xl">willjenner.uk</h1>

      <div></div>
    </main>
  );
};

export default HomePage;
