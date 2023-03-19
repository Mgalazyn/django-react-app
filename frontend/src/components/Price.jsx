import price1Img from "./images/price1.png";
import price2Img from "./images/price2.png";
import price3Img from "./images/price3.png";

function Price() {
    return (<div className="over-pricing">
                <div className="about-pricing">
                    <img src={price1Img} alt='price' />
                    <h3>59 pln/m</h3>
                    <h4> Basic </h4>
                    <ul>
                        <li>
                            Free first training
                        </li>
                        <li>
                            Personal trainer
                        </li>
                        <li>
                            Diet Schedule
                        </li>
                        <li>
                            Kcal calculator
                        </li>
                        <li>
                            Exercises Videos
                        </li>
                    </ul>
                    <a href="/login" class="join-button">Join Now</a>
                </div>
                <div className="about-pricing">
                    <img src={price2Img} alt='price' />
                    <h3>79 pln/m</h3>
                    <h4> Medium </h4>
                    <ul>
                        <li>
                            Additional 2 tranings
                        </li>
                        <li>
                            Personal trainer
                        </li>
                        <li>
                            Diet Schedule + 
                            Body scan
                        </li>
                        <li>
                            Kcal calculator
                        </li>
                        <li>
                            Exercises Videos
                        </li>
                        </ul>
                    <a href="/login" class="join-button">Join Now</a>
                </div>
                <div className="about-pricing">
                    <img src={price3Img} alt='price' />
                    <h3>99 pln/m</h3>
                    <h4> Premium </h4>
                    <ul>
                        <li>
                            All from Premium
                        </li>
                        <li>
                            Free training plan for 1 month
                        </li>
                        <li>
                            Free diet plan for 1 month
                        </li>
                        <li>
                            Exercise analyze with trainer
                        </li>
                    </ul>
                    <a href="/login" class="join-button from-center">Join Now</a>
                </div>
            </div>
    )
}

export default Price;