import { useParams, useNavigate } from "react-router-dom"
import styles from "./ProductView.module.css"
import { useState, useEffect } from "react"

export default function ProductView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `${process.env.REACT_APP_API_URI}/product/${id}`,
        )
        const data = await response.json()
        if (data.success) {
          setProduct(data.part)
        }
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleBack = () => {
    navigate(-1)
  }

  const handleWhatsApp = () => {
    const phoneNumber = "923123456789" // Placeholder number
    const message = `Assalam o Alaikum! I am interested in ${product.name}. Price: ${product.price}. Brand: ${product.brand}.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  if (loading) return <h2 className={styles.loading}>Loading...</h2>
  if (!product) return <h2 className={styles.error}>Product Not Found</h2>

  return (
    <section className={styles.container}>
      <h2>{product.name}</h2>

      <div className={styles.wrapper}>
        <img src={product.image} alt={product.name} />

        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>{product.condition}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{product.category}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{product.description}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.backBtn} onClick={handleBack}>
          Back
        </button>
        <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
          Lets Have A Deal<i className="fa-brands fa-whatsapp"></i>
        </button>
      </div>
    </section>
  )
}
