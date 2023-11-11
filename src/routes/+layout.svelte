<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class='bg-slate-50 h-full'>
	<nav class="bg-slate-300 p-2 flex justify-between items-center">
		<div>
			<a class="px-1 font-sans font-semibold hover:text-slate-50" href="/">Home</a>
		</div>
		<div class="flex items-center">
			{#if data.session}
				<a class="px-2 font-sans font-semibold hover:text-slate-50" href="/posts">Posts</a>
				<a class="px-2 font-sans font-semibold hover:text-slate-50" href="/account">Account</a>
				<form  action="/logout" method="POST">
					<button class="px-1 py-1 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50  hover:text-slate-600 hover:bg-slate-50" type="submit">Logout</button>
				</form>
			{:else}
				<a class="px-1 py-1 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50  hover:text-slate-600 hover:bg-slate-50" href="/login">Login</a>
				<a class="px-1 py-1 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50  hover:text-slate-600 hover:bg-slate-50" href="/signup">Signup</a>
			{/if}
	
			<!-- <a href="/posts">Posts Testing</a> -->
		</div>
	</nav>
	
	<slot />
</main>

