import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import LoadingView from '../components/LoadingView'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, fetchAllProducts } from '../redux/actions/productActions'

export default function Home() {

    const dispatch = useDispatch()
    const {products} = useSelector(state => state.prodReducer)
    const {isLoading} = useSelector(state => state.prodReducer)
    const {categories} = useSelector(state => state.prodReducer)

    // declare local state
    // const [products, setProducts] = useState([])
    // const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
        // subscribe to store
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
    }, [])
  return (
    <>
        <main className='container'>
            <h1 className='text-center'>Products</h1>
            
            <div className='row g-4'>
                {
                    isLoading ? 
                    <>
                        <div className='col-12 col-md-3'>
                            <LoadingView />
                        </div>
                    </>
                    : 
                    products.map((p) => (
                        <div 
                            key={p.id}
                            className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <Link 
                                to={`/read/${p.id}`}
                                className='text-decoration-none'
                            >
                                <Card 
                                    imageURL={p.images[0]}
                                    title={p.title}
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    </>
  )
}
