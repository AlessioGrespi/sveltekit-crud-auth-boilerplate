<form action="?/createPost" method="POST">
    <h3>New Post</h3>
    <label for="title"> Title </label>
    <input type="text" id="title" name="title" />
    <label for="content"> Content </label>
    <textarea id="content" name="content" rows={5} />
    <button type="submit">Add Post</button>
</form>