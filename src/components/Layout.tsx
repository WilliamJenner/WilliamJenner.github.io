import { Link, Outlet } from "react-router-dom";

interface ILayoutProps {}

const Layout = (props: ILayoutProps) => {
  return (
    <div className="flex flex-col gap-4 h-screen justify-between container mx-auto px-4 py-2 sm:px-6 sm:py-4 md:px-8">
      <header>
        <h1 className="text-4xl">
          <Link to={"/"}>willjenner.co.uk</Link>
        </h1>
      </header>

      <main className="mb-auto">
        <Outlet />
      </main>

      <footer className="py-4 flex items-end border-t">
        <address className="not-italic">
          <a
            className="underline"
            href="https://www.linkedin.com/in/william-j-73a796120/"
          >
            LinkedIn
          </a>
          {" | "}
          <a className="underline" href="https://github.com/WilliamJenner">
            GitHub
          </a>
          {" | "}
          <a
            className="underline"
            href="https://github.com/WilliamJenner/williamjenner.github.io"
          >
            Source
          </a>
        </address>
      </footer>
    </div>
  );
};

export default Layout;
