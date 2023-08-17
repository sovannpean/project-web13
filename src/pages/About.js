import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/actions/productActions'

export default function About() {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.prodReducer)
  useEffect(() => {
      // subscribe to store
      dispatch(fetchAllProducts())
  }, [])
  return (
    <main>
        <h2>About Us Page</h2>
        {
          console.log(products)
        }
    </main>
  )
}
