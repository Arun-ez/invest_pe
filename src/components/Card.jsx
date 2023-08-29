import classes from "@/styles/card.module.css";
import { GreenArrow } from "@/icons/GreenArrow";

const Card = ({ src, brand, highlight, icon, returns, discount, height, width }) => {
    return (
        <div className={classes.card} style={{ height }}>
            <img className={classes.clubtag} src={'/assets/clubtag.svg'} alt="tag" />
            <div style={{ height }}>
                <img src={src} alt="brand" />
                <div>
                    <div className={classes.brand}>
                        <div className={classes.icon}> {icon} </div>
                        <p> {brand} </p>
                    </div>

                    <h3 className={classes.highlight}> {highlight} <GreenArrow /> </h3>
                </div>
            </div>

            <div className={classes.offers}>
                <p> {returns} returns + </p>

                <div> Flat ₹{discount} off </div>
            </div>
        </div>
    )
}

export { Card }
