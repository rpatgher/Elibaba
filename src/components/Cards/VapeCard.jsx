// VapeCard.jsx
import React, { useState } from "react";
import styles from "./VapeCard.module.css";

import PopupPortal from "./PopupPortal";
import Popup from "./Popup";

const VapeCard = ({ vape }) => {
    const { name, price, image, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (e) => {
        e.stopPropagation();
        setShowPopup(!showPopup);
    };

    return (
        <div
            className={styles.card}
            style={{
                backgroundColor: `color-mix(in srgb, ${color} 40%, #fff)`,
            }}
            onClick={togglePopup}
        >
            <div className={styles.vape}>
                <div>
                    <div className={styles.vapeimage}>
                        <img
                            src={`${import.meta.env.VITE_BACKEND_URL}/uploads/elements/${image}`}
                            alt="Vape Image"
                            style={{
                                maskImage: `linear-gradient(to bottom, ${color} 60%, transparent)`,
                            }}
                        />
                    </div>
                    <p
                        style={{
                            color: `color-mix(in srgb, ${color} 35%, #000)`,
                        }}
                    >
                        {name}
                    </p>
                </div>
            </div>
            <div className={styles.price}>
                <p
                    style={{
                        backgroundColor: color,
                        color: `color-mix(in srgb, ${color} 35%, #000)`,
                    }}
                >
                    ${price}
                </p>
            </div>
            {showPopup && (
                <PopupPortal>
                    <Popup 
                        vape={vape} 
                        togglePopup={togglePopup} 
                    />
                </PopupPortal>
            )}
        </div>
    );
};

export default VapeCard;
