const price1 = new URL("./images/price1.png", import.meta.url)
const price2 = new URL("./images/price2.png", import.meta.url)
const price3 = new URL("./images/price3.png", import.meta.url)


export default function Price() {
    return (<div className="over-pricing">
                <div className="about-pricing">
                    <img src={price1} alt='price' />
                    <h3>59 pln/m</h3>
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
                    <img src={price2} alt='price' />
                    <h3>79 pln/m</h3>
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
                    <img src={price3} alt='price' />
                    <h3>99 pln/m</h3>
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
                    <a href="/login" class="join-button from-center">Join Now</a>
                </div>
            </div>
    )
}