import React, { useState } from "react";

const Wrapper = ({children}) => {
    return (
        <div>
            <header>
                <h1>header</h1>
            </header>
            <div>{children}</div>
            <footer>
                <h1>Fooder</h1>
            </footer>
        </div>
    );
};

export default Wrapper;