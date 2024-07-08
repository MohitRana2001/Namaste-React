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

const Title = () => (
    <h1 id="title" key="h2">
        Namste React
    </h1>
);

const HeaderComponent = () => {
    return (
        <div>
            <Title />
            <h1>
                Namaste React functional components
            </h1>
            <h2>
            This is a functional component
            </h2>
        </div>
    )
}

const AppLayout = () {
    <Header/>
    <Body/>
    <Footer/>
}

//React.createElement => Object => HTML(DOM)


const heading2 = <h1 id="title" key="h2"> Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(<HeaderComponent />);