import React from "react";
import Boxes from "./Boxes";
import Price from "./Price";

const left2 = new URL("./images/left.jpg", import.meta.url)
const main = new URL("./images/main.jpg", import.meta.url)
const left = new URL("./images/left1.jpg", import.meta.url)
const test2= new URL("./images/test2.jpg", import.meta.url)
const test1 = new URL("./images/test1.jpg", import.meta.url)

export default function Home() {
    return (
        <>  
        <section>
            <div id="photos" className="photos">
                <div className="hero">
                    <div className="hero-images">
                        <img src={left} alt='left' />  
                        <img src={left2} alt='left2'/>
                        <img src={main} alt ='main'/>         
                        <img src={test1} alt='test1' />
                        <img src={test2} alt='test2' />  
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
