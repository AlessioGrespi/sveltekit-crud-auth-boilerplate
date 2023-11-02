<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form action="?/signup" method="POST">
	{#if data.oAuth.email}
		<div>email: {data.oAuth.email}</div>
	{:else}
		<!-- <div>
			<label>email: <input name="email" id="email" type="text" /></label>
		</div> -->
	{/if}
	<div>
		<label>Username: <input name="username" id="username" type="text" /></label>
	</div>
	<div>
		<label>Password: <input name="password" id="password" type="password" /> </label>
	</div>
	<button type="submit">Signup</button>
</form>
