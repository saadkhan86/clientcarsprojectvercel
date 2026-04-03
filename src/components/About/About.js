import styles from "./About.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2>
          About 
        </h2>
        <p>
          AutoPartHub is your trusted platform for finding high-quality car
          spare parts and accessories. We provide engine parts, tires,
          headlights, and many other vehicle components for different types of
          cars. Our goal is to make it easy for customers to find reliable auto
          parts at affordable prices.
        </p>

        <div className={styles.features}>
          <div className={styles.card}>
            <h3>Quality Parts</h3>
            <p>We provide high quality and reliable car spare parts.</p>
          </div>

          <div className={styles.card}>
            <h3>Affordable Prices</h3>
            <p>Our platform helps you find parts at the best prices.</p>
          </div>

          <div className={styles.card}>
            <h3>Easy Contact</h3>
            <p>Contact sellers easily and get the parts you need.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
