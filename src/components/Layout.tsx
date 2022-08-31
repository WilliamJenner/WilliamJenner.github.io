import { Link, Outlet } from "react-router-dom";

interface ILayoutProps {}

const Layout = (props: ILayoutProps) => {
  return (
    <div className="flex flex-col gap-4 h-screen justify-between container mx-auto">
      <header>
        <h1 className="text-4xl">
          <Link to={"/"}>willjenner.uk</Link>
        </h1>
      </header>

      <main className="mb-auto">
        <Outlet />
      </main>

      <footer className="py-4 flex items-end">
        <p className="opacity-50">&copy; William Jenner 2022</p>
      </footer>
    </div>
  );
};

export default Layout;
