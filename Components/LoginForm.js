import React from 'react'


function LoginForm() {
    return (
        <div>
            <form action="#" method="post">
              <h1>Login </h1>
              <p >Lorem ipsum dolor sit amet. Ut repellat natus ut
                  temporibus tempore ut possimus omnis. </p>
              <div className="form-group first">
                <label for="username">Username</label>
                <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username"/>
              </div>
              <div className="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" className="form-control" placeholder="Your Password" id="password"/>
              </div>
              
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                  <input type="checkbox" checked="checked"/>
                  <div className="control__indicator"></div>
                </label>
                <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
              </div>

              <input type="submit" value="LogIn" className="btn btn-block btn-primary"/>

            </form>
        </div>
    )
}

export default LoginForm
