/*
*
Parcel is continuously reloading which is also know as :- 
Hot Module Replacement

File Watcher Algorithm :- C++

PARCEL :- 
Bundling and Minification our code,
Cleaning our code,
Dev and Production Buil,
Image Optimizatio,
Caching while development,
Compression,
Compatible wiht older versions of browser,
It adds polyfils,
HTTPS on dev,
Manages Port NO.,
Consistent Hashing Algorithm,
Zero Config Bundler,
Transitive Dependencies :- To make a production ready
    application we use serveral modules and they need several
    dependencies. There is a dependency tree between these 
    dependencies.,
Tree Shaking
*
*
*
*/


import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement(
    "h1", 
    {
    id : "heading1",
    key : "h1",
    },
    "Namaste Everyone"
);

//React.createElement => Object => HTML(DOM)

console.log(heading1);

const heading2 = <h1 id="title" key="h2"> Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(container);