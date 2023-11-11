<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	
	$: ({ posts } = data)
</script>



<div class='flex p-5 justify-between'>
    <div class='mx-20 bg-slate-200 px-10 '>
        <h2>Posts:</h2>
    {#each posts as post}
        <ul>
            <li><a href='/posts/{post.id}'>{post.title}</a></li>
        </ul>
    {/each}
    </div>
    
    <div>
        <a class="px-1 py-1 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50  hover:text-slate-600 hover:bg-slate-200" href="./posts/createPost">Create Post</a>
    </div>
</div>
