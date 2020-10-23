import React, { useState } from "react";

export default function Login() {
    return (
        <div class="login-form">
        <form>
        <h2 class="text-center">Log in</h2>  
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Email" required="required" />
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required"/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="float-left form-check-label">
                <input type="checkbox"/> Remember me
            </label>
            <a href="#" class="float-right">Forgot Password?</a>
        </div>
        </form>
        <style>{`
        .login-form {
            width: 340px;
            margin: 50px auto;
            font-size: 15px;
        }
        .login-form form {
            margin-bottom: 15px;
            background: #f7f7f7;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
            padding: 30px;
        }
        .login-form h2 {
            margin: 0 0 15px;
        }
        .form-control, .btn {
            min-height: 38px;
            border-radius: 2px;
        }
        .btn {        
            font-size: 15px;
            font-weight: bold;
        }
        `}</style>
        </div>
        
    );
}