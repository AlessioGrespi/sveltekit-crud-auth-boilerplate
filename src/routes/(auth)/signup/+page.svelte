<div class="bg-slate-50 flex justify-center">
	<div class="bg-slate-300 rounded p-5 m-5">
		<form action="?/signup" method="POST">
			<div class="flex justify-between p-1">
				<label class="pr-2"> Email: </label><input
					class="w-40"
					name="email"
					id="email"
					type="email"
				/>
			</div>
			<div class="flex justify-between p-1">
				<label class="pr-2"> Username: </label><input
					class="w-40"
					name="username"
					id="username"
					type="text"
				/>
			</div>
			<div class="flex justify-between p-1">
				<label class="pr-2"> Password: </label><input
					class="w-40"
					name="password"
					id="password"
					type="password"
				/>
			</div>
			<div class="flex justify-center p-1">
				<button
					class=" px-1 py-1 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50 hover:text-slate-600 hover:bg-slate-200"
					type="submit">Signup</button
				>
			</div>
		</form>
		<!-- 		<form method="post" action="?/GoogleOAuth2">
			<div>
				<button type="submit">
					<img class="btn-auth-img" src='/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png' alt='google sign in'/>
					Sign up with google
				</button>
			</div>
		</form> -->
	</div>
</div>
