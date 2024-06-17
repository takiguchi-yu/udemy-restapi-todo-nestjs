"use client"

import { useAtom } from 'jotai';
import React from 'react';
import { emailAtom, passwordAtom, showPasswordAtom } from '../atoms';
import styles from "../styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const [showPassword, setShowPassword] = useAtom(showPasswordAtom);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // ログイン処理をここに追加
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.icon}></div>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password*</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              minLength={5}
            />
            <div
              className={styles.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
            </div>
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        <div className={styles.registerLink}>
          Don't have an account? <a href="/app/register">Register</a>
        </div>
      </div>
    </div>
  );
};
