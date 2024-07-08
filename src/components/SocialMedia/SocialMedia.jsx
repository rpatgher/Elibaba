import styles from "./SocialMedia.module.css";

const SocialMedia = ({footer}) => {
    return (
        <div className={`${styles.socialMedia} ${footer ? styles.footer : ''}`}>
            <a
                href="https://www.linkedin.com/in/eduardo-reznik-0941a2170/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
                href="https://wa.me/525585567950"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-square-whatsapp"></i>
            </a>

            <a
                href="https://www.instagram.com/empaques.cintamex/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-square-instagram"></i>
            </a>
        </div>
    );
};

export default SocialMedia;
