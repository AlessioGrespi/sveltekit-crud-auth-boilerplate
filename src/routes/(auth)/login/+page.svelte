<div class="bg-slate-50 flex justify-center">
	<div class="bg-slate-300 rounded p-5 m-5">
		<form action="?/login" method="POST">
			<!-- <form method="POST"> -->
			<div class="flex justify-between p-1">
				<label class="pr-2"> 
					Email: </label><input
					class="w-40"
					name="email"
					id="email"
					type="email"
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
					type="submit">Login</button
				>
			</div>
		</form>
	</div>
</div>
