import classes from "@/styles/dropdownitem.module.css";

const DropdownItem = ({ data: { label, details, icon } }) => {

    return (
        <div className={classes.item}>
            <img src={icon} alt="icon" />
            <div>
                <span> {label} </span>
                <p> {details} </p>
            </div>
        </div>
    )
}

export { DropdownItem }
