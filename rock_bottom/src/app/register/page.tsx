"use client";

import RegImg from "../../../public/assets/register.png";
import NavBar from "@/features/navs";
import styles from "./styles.module.scss";
import Image from "next/image";
import React, { useState } from "react";

const Register = () => {
  // const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Registration failed");
      }
      setSuccess(true);
      setForm({
        name: "",
        username: "",
        email: "",
        dob: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.register_cont}>
      <NavBar />
      <div className={styles.register}>
        <div className={styles.reg_img}>
          <Image src={RegImg} alt="image" className={styles.img} />
        </div>
        <div className={styles.reg_form}>
          <h1>Join Us</h1>
          <p> Register and Be Part of the Rock Bottom Family.</p>

          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={form.username || ""}
                onChange={handleChange}
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="dob">Date Of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                value={form.dob || ""}
                onChange={handleChange}
                placeholder="YYYY-MM-DD"
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className={styles.form_group}>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={form.confirmPassword || ""}
                onChange={handleChange}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

            {error && <div className={styles.error}>{error}</div>}
            {success && (
              <div className={styles.success}>Registration successful!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
