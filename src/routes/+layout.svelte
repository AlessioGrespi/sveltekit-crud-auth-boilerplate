<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="navbar">
	<a href="/">Home</a>
	{#if data.email}
	<form action="/logout" method="POST">
		<button type="submit">Logout</button>
	</form>
	<a href="/posts">Posts</a>
	{:else}
		<a href="/login">Login</a>
		<a href="/signup">Signup</a>
	{/if}
</div>

<slot />
