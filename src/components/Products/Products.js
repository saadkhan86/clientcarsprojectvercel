import styles from "./Products.module.css"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Products() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const search = searchParams.get("search")
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        console.log(search)
        const url = search
          ? `${process.env.REACT_APP_API_URI}/products/query?search=${search}`
          : `${process.env.REACT_APP_API_URI}/products/query`
        const response = await fetch(url)
        const data = await response.json()
        if (data.success) {
          setProducts(data.parts)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [search])

  if (loading) return <h2 className={styles.loading}>Loading...</h2>

  return (
    <section className={styles.products}>
      <h1>
        <span>Car</span> Products
      </h1>

      <div className={styles.grid}>
        {products.map((product) => (
          <div
            className={styles.card}
            key={product._id}
            onClick={() => {
              navigate(`/products/${product._id}`)
            }}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              Brand:{" "}
              <span className={styles.productBrand}>{product.brand}</span>
            </p>
            <p>Condition: {product.condition}</p>
            <p className={styles.price}>{product.price}</p>
            <button className={styles.btn}>View Details</button>
          </div>
        ))}
      </div>
    </section>
  )
}
