import { redirect, json, useActionData } from 'remix';
import { Form } from 'remix';
import connectDb from '~/db/connectDb.server';

export async function action({request}) {
    const form = await request.formData();
    const db = await connectDb();
    try {
        const newBook = await db.models.Book.create({title: form.get("title")});
        return redirect(`/books/${newBook._id}`);
    } catch(error) {
        return json({errors: error.errors, values: Object.fromEntries(form)}, { status: 400 })
        console.log("ERROR", error);
        
    }
}

export default function CreateBook() {
    const actionData = useActionData();
    return (
        <div>
            <h2>Create book</h2>
            <Form method="post">
                <label htmlFor="title" defaultValue={actionData?.values.title} id="title">Title</label>
                <input type="text" name="title"  className={actionData?.errors.title ? "border-2 border-red-500" : null}/>
                {actionData?.errors.title && <p className='text-red-500'>{actionData.errors.title.message}</p>}
                <button type="submit">Save</button>
            </Form>
        </div>
    )
}