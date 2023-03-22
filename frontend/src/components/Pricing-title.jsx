import pricetitleImg from "./images/pricing-title.png";

function PricingTitle() {
    return (
        <div className="pricing-title-over">
            <div className="pricing-title-about">
                <h1>PRICING CHARTS</h1>
                <img src={pricetitleImg} alt='pricing-title' />
                <div className="text-block-title">
                    <h2>Exclusive Pricing Plan</h2>
                    <p>Pre-order prices before starting project, be our first customer get lower prices.
                        After release price can be higher.</p>
                </div>
            </div>
        </div>
    )
}


export default PricingTitle;