<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ post, posts, userID } = data);
</script>

<div class="bg-slate-50 flex justify-center">
	<div class="bg-slate-300 rounded p-5 m-5 w-3/5 capitalize">
		<h2 class="font-bold text-lg">{post.title}</h2>
		<p>{post.content}</p>
	</div>
	<div class=" w-2/5 p-5 -ml-5">
		{#if post.authorId === userID}
			<div class="flex justify-center">
				<a
					class="w-fit p-2 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50 hover:text-slate-600 hover:bg-slate-200"
					href="./{post.id}/edit">Edit Post</a
				>
			</div>
		{/if}

		<div class="bg-slate-300 rounded p-5 mt-5">
			<h2 class='font-bold pb-2'>Posts:</h2>
			<ul>
				{#each posts as post}
					<li class='p-1'><a class='text-base bg-slate-400 p-1 px-2 rounded capitalize font-semibold hover:text-slate-100'  href="/posts/{post.id}">{post.title}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</div>
