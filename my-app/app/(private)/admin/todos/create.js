'use client'

import { redirect } from "next/navigation";

export default function CreateTodo() {
    async function createAction(formData) {
        'use action'
        const title = formData.get("title");
        const data = {
            title: title,
            completed: false
        };

        await fetch("http://localhost:5284/api/todos/create", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        });

        redirect("/admin/todos");
    }

    return (
        <div>
            <form action={createAction}>
                <label>Work Title</label>
                <input name="title" />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}