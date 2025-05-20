'use client'

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import LoginImg from "../../../public/assets/login.png"; // Replace with your login image path
import Link from "next/link";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Login failed");
      }
      // handle success (e.g., redirect)
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className={styles.login_cont}>
      <div className={styles.login_img}>
          <Image src={LoginImg} alt="Login" className={styles.img} />
        </div>
      <div className={styles.login}>
        <div className={styles.login_form}>
          <h1>Log In</h1>
          <p className={styles.subtitle}>
            Don&apos;t have an account?{" "}
            <Link href="/register" className={styles.signup_link}>
              Sign Up
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={form.password}
                onChange={handleChange}
                className={styles.input}
              />
              {/* Optionally add show/hide password icon here */}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={styles.submit_btn}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
            {error && <div className={styles.error}>{error}</div>}
            <div className={styles.forgot}>
              <Link href="/forgot-password">Forgot your Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;