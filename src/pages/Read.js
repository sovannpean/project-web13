import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Read() {
  let {id} = useParams()
  /// MARK: create a state to store product object
  /// set default value for state for handle slow data load
  const [product, setProduct] = useState({
    title: "លក់នំប៉័ងបាតេ",
    description: "លក់នំប៉័ងបាតេតម្លៃធូរថ្លៃ",
    images: [
      "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
    ]
  })

  let fetchDetailProduct = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(resp => resp.json())
    .then(resp => setProduct(resp))
  }
  useEffect(() => {
    fetchDetailProduct(id)
  }, [])
  return (
    <main className='container'>
        <h1>{product.title}</h1>
        <h5>{product.description}</h5>
        <img src={product.images[0]} alt="" />
    </main>
  )
}
