import { useLoaderData } from "remix";
import connectDb from "~/db/connectDb.server.js";

export async function loader({ params }) {
  const db = await connectDb();
  if(!db.models.Book.findById(params.bookId)) {
    throw new Error("no title provided")
  }
  return db.models.Book.findById(params.bookId);
}

export default function BookPage() {
  const book = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <img className="" src={book.image} alt="image" />
    </div>
  );
}
