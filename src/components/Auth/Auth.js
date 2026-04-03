import { useState } from "react"
import styles from "./Auth.module.css"
import { useNavigate } from "react-router-dom"

export default function Auth() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [message, setMessage] = useState({ text: "", type: "" }) // type: "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage({ text: "", type: "" }) // clear old messages

    try {
      const endpoint = isLogin ? "login" : "signup"
      const res = await fetch(
        `${process.env.REACT_APP_API_URI}/user/${endpoint}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      )

      const data = await res.json()

      if (res.ok) {
        setMessage({ text: data.message || "Success", type: "success" })
        setForm({ name: "", email: "", password: "" })

        if (!isLogin) {
          setIsLogin(true)
        } else {
          navigate("/dashboard")
        }
      } else {
        setMessage({ text: data.message || "Failed", type: "error" })
      }
    } catch (err) {
      setMessage({ text: err.message || "Something went wrong", type: "error" })
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Show success/error message at top */}
        {message.text && (
          <p
            style={{
              color: message.type === "success" ? "green" : "red",
              marginBottom: "10px",
            }}
          >
            {message.text}
          </p>
        )}

        {!isLogin && (
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          value={form.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          value={form.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Create Account"}</button>

        <p
          onClick={() => {
            setIsLogin(!isLogin)
            setForm({ name: "", email: "", password: "" })
            setMessage({ text: "", type: "" }) // clear messages on toggle
          }}
          className={styles.toggle}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  )
}
