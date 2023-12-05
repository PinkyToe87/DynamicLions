import classes from './CTAButton.module.css';

const CTAButton = (props) => {
    return  <div className={classes.CTAButton}>{props.children}</div>;
}

export default CTAButton;