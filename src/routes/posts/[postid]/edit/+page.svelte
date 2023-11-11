<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ post } = data);
</script>

<div class="bg-slate-50 flex justify-center">
	<div class="bg-slate-300 rounded p-5 m-5">
		<h3 class='font-bold capitalize pb-2 justify-center flex'>Editing: {post.title}</h3>
		<form action="?/updatePost" method="POST">
			<div class="flex justify-between p-1">
				<label class='pr-2' for="title">Title:</label>
				<input class="w-60" type="text" id="title" name="title" value={post.title} />
			</div>
			<div class="flex justify-between p-1">
				<label class='pr-2' for="content">Body:</label>
				<textarea class="w-60" id="content" name="content" rows={5} value={post.content} />
			</div>
			<div class="flex justify-center p-1">
				<button
					class="w-fit p-2 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50 hover:text-slate-600 hover:bg-slate-200"
					type="submit">Update post</button
				>
			</div>
		</form>
	</div>
</div>
