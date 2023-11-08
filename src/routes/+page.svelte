<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	
	$: ({ posts } = data)
</script>

<main>
    {#if data.email}
		<p>Welcome, {data.email}</p>
	{/if}

	<h1>To Do: </h1>
	<ul>
		<li>Add Tailwind</li>
		<li>Update the sessions expiry time</li>
		<li>Update session expiry</li>
		<li>Salt the passwords</li>
		<li>Change the password</li>
		<li>Delete user account</li>
		<li>oAuth (lol)</li>
		<li>Protected CRUD</li>
		<li>Move Sessions logic/db to redis</li>
		<li>Protect posts from being edited by other people</li>
	</ul>
	<h1>Complete:</h1>
	<ul>
		<li>Basic login</li>
		<li>CRUD</li>
		<li>Hash the passwords</li>
	</ul>
</main>
