import { Button, Input } from "antd";
import React, { useState } from "react";
import Link from 'next/link'

export default function Login() {
    return (
        <div class="login-form">
            <form>
                <h2 class="text-center">Log in</h2>  
                <div class="form-group">
                    <Input type="text" class="form-control" placeholder="Email" required="required"/>
                </div>
                <div class="form-group">
                    <Input type="password" class="form-control" placeholder="Password" required="required"/>
                </div>
                <div class="form-group">
                    <Button type="submit" class="btn btn-success" style={{color:"green"}}>Log in</Button>
                </div>
                <div class="form-group">
                    <Link href="/register">
                        <a>Registrarse</a>
                    </Link>
                </div>
                <div class="clearfix">
                    <label class="float-left form-check-label">
                        <input type="checkbox"/> Remember me
                    </label>
                    <a href="#" class="float-right">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}