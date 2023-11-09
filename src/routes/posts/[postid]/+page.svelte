<script lang="ts">
	import type { PageData } from './$types'
    
	export let data: PageData
	$: ({ post, posts, userID } = data)
</script>

{#if post.authorId === userID}
<a href='./{post.id}/edit'>Edit Post</a>
{/if}

<h2>{post.title}</h2>
<p>{post.content}</p>

<div>
    {#each posts as post}
        <ul>
            <li><a href='/posts/{post.id}'>{post.title}</a></li>
        </ul>
    {/each}
</div>
