import classes from "@/styles/footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <img height={70} src="/assets/logo.png" alt="logo" />

            <div className={classes.info}>
                <div>
                    <h4> Contact Us </h4>

                    <p> 8089225625 </p>
                    <p> contact@chhotastock.com </p>
                </div>

                <div>
                    <h4> Company </h4>

                    <p> About Us </p>
                    <p> Privacy Policy </p>
                    <p> Terms and Conditions </p>
                </div>

                <div>
                    <h4> Quick Links </h4>

                    <p> Home </p>
                    <p> Gateway </p>
                    <p> Blog </p>
                </div>

                <div>
                    <h4> Download the App Now </h4>
                    <img src="/assets/playstore.svg" alt="playstore" />
                </div>
            </div>

            <div className={classes.findus} >
                <h4> Find Us On </h4>

                <div className={classes.socials}>
                    <img src="/assets/facebook.png" alt="facebook" />
                    <img src="/assets/youtube.png" alt="youtube" />
                    <img src="/assets/instagram.png" alt="instagram" />
                    <img src="/assets/twitter.png" alt="twitter" />
                </div>
            </div>

            <div className={classes.buttom_line}>
                <p> © 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited. </p>

                <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.
                    Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing</p>
                <p>Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</p>
                <p>For any query / feedback / clarifications, email at contact@chhotastock.com</p>
                <p> All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments
                    in such baskets, portfolios. </p>
            </div>
        </footer>
    )
}

export { Footer }
