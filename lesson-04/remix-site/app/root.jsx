import { Link, Outlet, LiveReload, Links, Meta, Scripts } from "remix";
import styles from "~/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  description: "An example blog",
  keywords: "remix, javascript",
});

export default function App() {
  return (
    <Document title="Remix Recipes">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body className="bg-black text-white p-5">
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        <Scripts />
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar flex flex-row justify-between">
        <Link to="/" className="logo">
          Remix Recipes
        </Link>
        <ul className="nav">
          <Link to="/recipes">Recipes</Link>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
