<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	
	$: ({ posts } = data)
</script>



<div>
    <h2><a href="./posts/createPost">Create Post</a></h2>
    <h2>Posts:</h2>
    {#each posts as post}
        <ul>
            <li><a href='/posts/{post.id}'>{post.title}</a></li>
        </ul>
    {/each}
</div>
