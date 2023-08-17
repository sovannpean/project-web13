import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { searchProduct } from '../services/productAction';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate()
    // declare state product
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Photos',
            selector: row => <img src={row.images[0]} alt="product" style={{width: '50px'}}/>,
        },
        {
            name: 'Action',
            selector: row => <button type="button" 
                onClick={() => navigate("/edit", {
                    state: row
                })}
                className="btn btn-outline-primary"
                >Edit</button>
        }
    ];
    
    useEffect(() => {
        searchProduct(search).then(resp => setProducts(resp))
    }, [search])

  return (
    <main className='container'>
        <DataTable 
            columns={columns}
            data={products}
            pagination
            subHeader
            subHeaderComponent={
                <input type="text" 
                    placeholder='search here' 
                    className='form-control'
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                        console.log(search)
                        
                    }}
                />
            }
        />
    </main>
  )
}
