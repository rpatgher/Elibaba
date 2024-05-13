import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./signup.module.css";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username, 'Email:', email,'Telephone',telephone, 'Password:', password);
        // Aquí puedes añadir la lógica para procesar el registro
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundText}>ELIBABA</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Signup</h1>

                <label htmlFor="username" className={styles.label}>Nombre de Usuario</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className={styles.input}
                    placeholder="Escribe tu nombre du usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder="Escribe tu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="Telephone" className={styles.label}>Telefono</label>
                <input
                    type="tel"
                    id="phone"
                    name="'phone'"
                    className={styles.input}
                    placeholder="Escribe tu telefono"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value.replace(/[^0-9]/g, ''))} 
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

                <button type="submit" className={styles.button}>Create Account</button>

                <div className={styles.loginlink}>
                    <p>Ya tienes cuenta?</p>
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
