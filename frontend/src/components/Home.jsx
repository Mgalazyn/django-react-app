import React from "react";

const left = new URL("./images/left.jpg", import.meta.url)
const main = new URL("./images/main.jpg", import.meta.url)
const right = new URL("./images/right.jpg", import.meta.url)
const right2= new URL("./images/test2.jpg", import.meta.url)
const left2 = new URL("./images/test1.jpg", import.meta.url)

export default function Home() {
    return (
        <section id="main" className="main">
            <div className="container">
                <div className="content">
                    <div className="Hero">
                        <div className="hero-images">
                            <img src={right} alt='right' />  
                            <img src={left} alt='left'/>
                            <img src={main} alt ='main'/>         
                            <img src={left2} alt='test1' />
                            <img src={right2} alt='right2' />  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
