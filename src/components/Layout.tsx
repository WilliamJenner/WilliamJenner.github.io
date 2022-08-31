import { Link, Outlet } from "react-router-dom";

interface ILayoutProps {}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <main className="container mx-auto">
        <header>
          <h1 className="text-4xl">
            <Link to={"/"}>willjenner.uk</Link>
          </h1>
        </header>
        <Outlet />
      </main>
      <footer className="container mx-auto">
        <p>footer</p>
      </footer>
    </>
  );
};

export default Layout;
