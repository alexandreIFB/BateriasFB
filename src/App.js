import React from "react";

import "./App.css";

function App() {
    return (
        <main class="container">
            <h2>login</h2>
            <form action="">
                <div class="input-field">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Your Username"
                    />
                    <div class="underline"></div>
                </div>
                <div class="input-field">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your password"
                    />
                    <div class="underline"></div>
                </div>
                <input type="submit" value="continue" />
            </form>

            <div class="footer">
                <span>Or Connect with social media</span>
                <div class="social-fields">
                    <div class="social-field twitter">
                        <a href="#">
                            <i class="fab fa-twitter"></i> Sign in with twitter
                        </a>
                    </div>
                </div>
                <div class="social-fields">
                    <div class="social-field facebook">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i> Sign in with
                            facebook
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;
