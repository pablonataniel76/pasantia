import React, { useState } from "react";

export default function Login() {
    return (
        <form>
        <label>
            Email:
            <br />
            <input style={{backgroundColor: "lightblue"}} type="text" name="name" />
            <br />
            Password: 
            <br />
            <input style={{backgroundColor: "lightblue"}} type="text" name="password" />
            <br />
        </label>
            <input style={{backgroundColor: "green"}} type="submit" value="Submit" />
        </form>
    );
}
