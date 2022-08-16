import { useParams } from "react-router-dom";

interface IBlogPageProps {}

const BlogPage = (props: IBlogPageProps) => {
  let { id } = useParams();

  return <div>{id}</div>;
};

export default BlogPage;
