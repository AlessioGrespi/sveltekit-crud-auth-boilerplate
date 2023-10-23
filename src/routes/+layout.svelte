<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="navbar">
	<a href="/">Home</a>
	{#if data.session}
	<form action="/logout" method="POST">
		<button type="submit">Logout</button>
	</form>
	<a href="/posts">Posts</a>
	{:else}
		<a href="/login">Login</a>
		<a href="/signup">Signup</a>
	{/if}
	<a href="/posts">Posts Testing</a>
</div>

<slot />
