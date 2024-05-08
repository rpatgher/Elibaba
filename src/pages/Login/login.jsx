import React, { useState } from 'react';
import styles from "./Login.module.css";

function Login() {
    // Estados para manejar las entradas del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes añadir la lógica para verificar las credenciales
        console.log('Username:', username, 'Password:', password);
        // Implementar lógica de autenticación aquí
    };

    return (
        <div className={styles.container}>
         <div className={styles.backgroundText}>ELIBABA</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Login</h1>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className={styles.input}
                    placeholder="Type your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    placeholder="Type your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className={styles.button}>
                    LOGIN
                </button>

                <img className={styles.elibba}  />


                <div className={styles.socialButtons}>
                    {/* Suponiendo que tienes los íconos como componentes o imágenes */}
                    <button className={styles.socialButton}>
                        <img src="././img/LogoFacebook.png" alt="Logo Elibaba" className={styles.socialIcon} />
                    </button>
                    <button className={styles.socialButton}>
                        <img src="././img/LogoX.png" alt="Logo Elibaba" className={styles.socialIcon} />
                    </button>
                    <button className={styles.socialButton}>
                        <img src="././img/LogoInstagram.png" alt="Logo Elibaba" className={styles.socialIcon} />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
