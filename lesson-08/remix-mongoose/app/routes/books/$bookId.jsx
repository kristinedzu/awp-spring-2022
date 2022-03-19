import { useLoaderData } from "remix";
import dbConnect from "~/services/db.server.js";
import { Book } from "~/models";

export async function loader({ params }) {
  await dbConnect();
  return Book.findById(params.bookId);
}

export default function BookPage() {
  const book = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <code>
        <pre>{JSON.stringify(book, null, 2)}</pre>
      </code>
    </div>
  );
}
