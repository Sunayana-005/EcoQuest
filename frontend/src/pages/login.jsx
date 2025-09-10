import '../styles/login.css'

export default function Login() {
  console.log("LOGIN PAGE")
  
  return (
    <div class="login-container">
        <div class="login-image">
            <img src="/assets/sap.jpg" alt="Abstract Background" />
        </div>

        <div class="login-form">
            <h2>Welcome Back!</h2>
            <p>Log in to your account</p>

            <form id="signinForm" method="POST">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>

                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div class="options">
                    <label>
                        <input type="checkbox" checked /> Remember Me
                    </label>
                </div>
                <a href="#">Forgot Password?</a>
                <p></p>

                <button type="submit">LOGIN</button>
            </form>

            <div class="signup-link">
                Don't have an account? <a href="#">Sign Up</a>
            </div>
        </div>
    </div>
  )
}