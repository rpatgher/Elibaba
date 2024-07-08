import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import SocialMedia from "../SocialMedia/SocialMedia";


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={styles.footer}>
            <div className={styles["footer-content"]}>
                <div className={styles.footerImage}>
                        <picture>
                            
                            <img src="../../assets/img/Elibabalogo.png" alt="Logo Elibaba" loading="lazy" width="200" height="300" />
                        </picture> 
                        
                </div>
                <div className={styles.footerSection}>
                   
                </div>
                <div className={styles.footerSection}>
                    <h3>Contacto</h3>
                    <p>
                        Correo:{" "}
                        <a href="mailto:">
                            info@cintamex.com.mx
                        </a>
                    </p>
                    <p>
                        Teléfono:{" "}
                        <a href="tel:+525530329283">(+52) 55 3032 9283</a>
                    </p>
                    <SocialMedia 
                        footer={true}
                    />
                </div>
                <div className={styles.footerSection}>
                    <h3>Ubicación</h3>
                    <a
                        href="https://maps.app.goo.gl/fhj1Unc4bfZC38316"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Calle Los Remedios num.11 Col. San Luis Tlatilco
                        Naucalpan de Juarez 53630
                    </a>
                </div>
            </div>
            <p className={styles.rights}>Todos los derechos reservados. Elibaba&#169;</p>
        </div>
    );
};

export default Footer;
