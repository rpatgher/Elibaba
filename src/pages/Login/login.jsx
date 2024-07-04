import React, { useState } from 'react';
import styles from "./login.module.css";
import { Link } from "react-router-dom";

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
                <Link to="/">Regresar</Link>
                <h1 className={styles.title}>Iniciar sesion</h1>
                <label htmlFor="username" className={styles.label}>Usuario</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className={styles.input}
                    placeholder="Type your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password" className={styles.label}>Contraseña</label>
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
                    Iniciar Sesion
                </button>

                <img className={styles.elibba}  />


                <div className={styles.socialButtons}>
                    {/* Suponiendo que tienes los íconos como componentes o imágenes */}
                   
                   <div className={styles.signuplink}>
                        <p>No tienes cuenta?</p>
                        <Link to="/signup">Signup</Link>
                   </div>
                   
                   

                    
                </div>
            </form>
        </div>
    );
}

export default Login;
