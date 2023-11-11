<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<div class='mx-20 mt-5 bg-slate-200 px-10 py-5'>
		<h1 class="font-semibold">To Do:</h1>
		<ul class="text-xs indent-4">
			
			<li>Update the sessions expiry time</li>
			<li>S3 uploads</li>
			<li>Invoke Lambda functions</li>
			<li>Update session expiry</li>
			<li>Hash Session id before adding to cookies</li>
			<li>Salt the passwords</li>
			<li>Delete user account</li>
			<li>oAuth (lol)</li>
			<li>Move Sessions logic/db to redis</li>
			<li>
				emails?
				<ul>
					<li>password reset</li>
					<li>verify email</li>
				</ul>
			</li>
		</ul>
		<h1 class="font-semibold">Complete:</h1>
		<ul class="text-xs indent-4">
			<li>Add Tailwind</li>
			<li>Change the password</li>
			<li>Basic login</li>
			<li>CRUD</li>
			<li>Hash the passwords</li>
			<li>Protected CRUD</li>
			<li>Protect posts from being edited by other people</li>
		</ul>
	</div>
</main>
