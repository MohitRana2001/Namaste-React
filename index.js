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
    dependencies.
*
*
*
*/


import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement("h1", {
    id : "heading2",
}, "Namaste Everyone")

console.log(heading1);

const heading2 = React.createElement("h2", {
    id : "heading2",
}, "Heading 2");

console.log(heading2);

const container = React.createElement("div", {
    id: "container",
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(container);