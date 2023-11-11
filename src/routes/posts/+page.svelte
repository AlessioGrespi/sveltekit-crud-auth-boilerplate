<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<div class="bg-slate-50 flex justify-center">
	<div class="bg-slate-300 rounded p-5 m-5 w-2/3">
		<h2 class="font-bold text-lg">Posts:</h2>
        <ul class="text-s indent-2 pt-2">
		{#each posts as post}
				<li class='p-1' ><a class='text-base bg-slate-400 p-1 px-2 rounded capitalize font-semibold hover:text-slate-100' href="/posts/{post.id}">{post.title}</a></li>
		{/each}
    </ul>
	</div>

	<div class="mt-10">
		<a
			class="p-2 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50 hover:text-slate-600 hover:bg-slate-200"
			href="./posts/createPost">Create Post</a
		>
	</div>
</div>
