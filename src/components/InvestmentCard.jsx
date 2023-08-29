import classes from "@/styles/investmentcard.module.css";

const InvestmentCard = ({ data: { label, details, cager, minAmount, icon } }) => {
    return (
        <div className={classes.container}>
            <div className={classes.heading}>
                <div className={classes.icon}> {icon} </div>
                <h3> {label} </h3>
            </div>

            <p> {details} </p>

            <div className={classes.cager}>
                <div>
                    <h5> Cager </h5>
                    <p> {cager} </p>
                </div>

                <div>
                    <h5> Min Amount </h5>
                    <p> {minAmount} </p>
                </div>
            </div>
        </div>
    )
}

export { InvestmentCard }
