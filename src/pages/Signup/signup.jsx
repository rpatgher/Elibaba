import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./signup.module.css";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username, 'Email:', email, 'Password:', password);
        // Aquí puedes añadir la lógica para procesar el registro
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundText}>ELIBABA</div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Signup</h1>

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

                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder="Type your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
