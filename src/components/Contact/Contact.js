import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <p>Feel free to send us your message</p>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className={styles.input}
          required
        />

        <textarea
          placeholder="Your Message"
          className={styles.textarea}
          rows="5"
          required
        ></textarea>

        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>
      <div className={styles.social}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </section>
  )
}
