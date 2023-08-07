'use client';

export default function Page() {
    const addPost = () => {
        // TODO
    };

    const deletePost = () => {
        // TODO
    };

    const editPost = () => {
        // TODO
    };

    const publishPost = () => {
        // TODO
    };

    const unpublishPost = () => {
        // TODO
    };

    return (
        <section className="h-full w-full flex flex-col justify-center items-center text-white">
            {/** Toolbar */}
            <div className="w-3/4 h-[10%] flex text-shadow">
                {/** Add post button */}
                <button className="button-text-shadow" onClick={addPost}>New post</button>

                {/** Edit, Delete, and Publish/Unpublish buttons */}
                <div className="flex gap-4 ml-auto button-text-shadow">
                    <button onClick={editPost}>Edit</button>
                    <button onClick={deletePost}>Delete</button>
                    <button onClick={publishPost}>Publish</button>
                    <button onClick={unpublishPost}>Unpublish</button>
                </div>
            </div>

            {/** Posts table */}
            {/** Columns: #, Title, Date, Status, Author */}
            <div className="w-full h-[90%] flex items-center justify-center">
                <table className="h-1/2 w-1/2 border border-white table-auto table-text-center table-border-white">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>How to Create an Awesome Blog</td>
                            <td>2021-09-01</td>
                            <td>Published</td>
                            <td>Suvashi Poblano</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>How to Create an Awesome Blog</td>
                            <td>2021-09-01</td>
                            <td>Published</td>
                            <td>Suvashi Poblano</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>How to Create an Awesome Blog</td>
                            <td>2021-09-01</td>
                            <td>Published</td>
                            <td>Suvashi Poblano</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>How to Create an Awesome Blog</td>
                            <td>2021-09-01</td>
                            <td>Published</td>
                            <td>Suvashi Poblano</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    )
}