<div class="bg-slate-50 flex justify-center">
	<div class="bg-slate-300 rounded p-5 m-5">
		<form action="?/changePassword" method="POST">
			<div class="flex justify-between p-1"><label class="pr-2"> Current Password: </label><input class="w-40" name="oldPassword" id="oldPassword" type="password" /></div>
			<div class="flex justify-between p-1"><label class="pr-2"> New Password: </label><input class="w-40" name="newPassword" id="newPassword" type="password" /></div>
			<div class="flex justify-center p-1"><button class="px-1 py-1 rounded mx-1 font-sans font-semibold bg-slate-600 text-slate-50  hover:text-slate-600 hover:bg-slate-200" type="submit">Change password</button></div>
		</form>
	</div>
</div>



<!-- 
<form action="?/deleteAccount" method="POST">
	<label>
		Email
		<input name="email" id="email" type="email" />
	</label>
	<label>
		Password
		<input name="password" id="password" type="password" />
	</label>
	<label>To confirm type: "DELETE ACCOUNT"<input name="confirm" id="confirm" type="text" /></label>
	<button type="submit">Delete Account</button>
</form>
 -->