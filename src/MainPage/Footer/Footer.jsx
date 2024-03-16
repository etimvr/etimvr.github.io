import classes from "../Footer/Footer.module.css";
import flower from "../../assets/footer-flower.svg";

export function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <div className={classes.flower}><img src={flower} alt="footer-flower"/></div>
                {/*todo move flower a bit higher*/}
                <div className={classes.text1}>Get in Touch</div>
                <div style={{marginBottom: 48}}/>
                <div style={{display: 'flex'}}>
                    <div style={{marginRight: 100}}>
                        <div className={classes.text2}>Email</div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.link}><a href="mailto:sandraovershv@gmail.com"
                                                         style={{color: "black"}}>sandraovershv@gmail.com</a></div>
                    </div>
                    <div>
                        <div className={classes.text2}>Linkedin</div>
                        <div style={{marginBottom: 16}}/>
                        <div className={classes.link}><a
                            href="https://www.linkedin.com/in/alexandra-shvetsova-20822a221/"
                            style={{color: "black"}}>Aleksandra Shvetsova</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

