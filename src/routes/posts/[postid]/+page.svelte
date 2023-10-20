<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ post } = data)
</script>

<form action="?/updatePost" method="POST">
	<h3>Editing: {post.title}</h3>
	<label for="title"> Title </label>
	<input type="text" id="title" name="title" value={post.title} />
	<label for="title"> Title </label>
	<textarea id="content" name="content" rows={5} value={post.content} />
	<button type="submit">Update post</button>
</form>
