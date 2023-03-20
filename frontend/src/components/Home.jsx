import React from "react";
import Boxes from "./Boxes";
import Price from "./Price";
import Workout from "./Workout";
import PricingTitle from "./Pricing-title";
import left2Img from "./images/left.jpg";
import mainImg from "./images/main.jpg";
import leftImg from "./images/left1.jpg";
import test2Img from "./images/test2.jpg";
import test1Img from "./images/test1.jpg";
import aboutImg from "./images/about.png";
import workoutImg from "./images/workout.png";
import dietImg from "./images/diet.png";
import price1Img from "./images/price1.png";
import price2Img from "./images/price2.png";
import price3Img from "./images/price3.png";
import workoutbackgroundImg from "./images/withoutbackground-work.png";
import shapeImg from "./images/shape.png";
import pricetitleImg from "./images/pricing-title.png";

function Home() {
    return (
        <>  
        <div id="photos" className="photos">
            <div className="hero">
                <div className="hero-images">
                    <img src={leftImg} alt='left' />  
                    <img src={left2Img} alt='left2'/>
                    <img src={mainImg} alt ='main'/>         
                    <img src={test1Img} alt='test1' />
                    <img src={test2Img} alt='test2' />  
                </div>
            </div>
        </div>
        <div className="boxes">
            <Boxes about={aboutImg} workout={workoutImg} diet={dietImg} />
        </div>
        <div className="workout">
            <Workout shape={shapeImg} workoutbackground={workoutbackgroundImg} /> 
        </div>
        <div className="pricing-title">
            <PricingTitle pricing-title={pricetitleImg} />
        </div>
        <div className="pricing">
            <Price price1={price1Img} price2={price2Img} price3={price3Img} />
        </div>
        </>
    );
}

export default Home;