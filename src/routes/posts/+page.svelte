<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	
	$: ({ posts } = data)
</script>



<div>
    <h2><a href="./posts/createPost">Create Post</a></h2>
    <h2>Posts:</h2>
    {#each posts as post}
        <article>
            <header>{post.title}</header>
				<form action="?/deletePost&id={post.id}" method="POST">
                <button type="submit" class="outline secondary">Delete post</button>
            </form>
            <a href="/posts/{post.id}" role="button" class="outline constrast" style="width: 100%;"
                >Edit post</a>
        </article>
    {/each}
</div>
