import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const navigate = useNavigate()

  const images = [
    "/car5.png",
    "/car1.png",
    "/car2.png",
    "/car3.png",
    "/car4.png",
    "/car5.png",
    "/car1.png",
  ]

  const [current, setCurrent] = useState(1)
  const [transition, setTransition] = useState(true)

  const sliderRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (current === images.length - 1) {
      const timer = setTimeout(() => {
        setTransition(false)
        setCurrent(1)
      }, 1500)
      return () => clearTimeout(timer)
    }

    if (current === 0) {
      const timer = setTimeout(() => {
        setTransition(false)
        setCurrent(images.length - 2)
      }, 1000)
      return () => clearTimeout(timer)
    }

    if (!transition) {
      const timer = setTimeout(() => {
        setTransition(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [current, images.length, transition])

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div
          ref={sliderRef}
          className={styles.slider}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transition ? "transform 1s ease-in-out" : "none",
          }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`slide-${index}`} />
          ))}
        </div>

        <div className={styles.heroContent}>
          <button onClick={() => navigate("/products")} className={styles.btn}>
            Explore Products
          </button>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Explore Our Featured Categories</h2>

        <div className={styles.grid}>
          <div
            className={styles.card}
            onClick={() => {
              navigate("/products?search=engine")
            }}
          >
            <img src="/engine.png" alt="Engine" />
            <h3>Engine Parts</h3>
          </div>

          <div
            className={styles.card}
            onClick={() => {
              navigate("/products?search=tires")
            }}
          >
            <img src="/tires.png" alt="Tires" />
            <h3>Tires</h3>
          </div>

          <div
            className={styles.card}
            onClick={() => {
              navigate("/products?search=light")
            }}
          >
            <img src="/headlights.png" alt="Lights" />
            <h3>Lights</h3>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Get in touch with our team</p>

        <div className={styles.contactBox}>
          <p>Email: hello@email.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className={styles.social}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-solid fa-envelope"></i>
        </div>
      </section>
    </div>
  )
}
