<div>
    <form action="?/signup" method="POST">
        <label>
            Username
            <input name="username" id="username" type="text">
        </label>
        <label>
            Email
            <input name="email" id="email" type="email">
        </label>
       <label>
            Password
            <input name="password" id="password" type="password">
        </label>
        <button type="submit">Signup</button>
    </form>
    <form class="auth-form" method="post" action="?/GoogleOAuth2">
        <div>
            <button class="btn-auth"  type="submit">
            <!-- <img class="btn-auth-img" src='/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png' alt='google sign in'/> -->
        Sign up with google    
        </button>
        </div>
    </form> 
</div>