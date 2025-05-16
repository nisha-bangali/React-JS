
import { useEffect, useId, useState } from 'react'
import ProductData from '../utility/ProductData'
import ProductCard from './ProductCard'
import { Link } from 'react-router'



// function ProductList() {
//   const [Data, setData] = useState(ProductData)
//   const [categoryFilter, setcategoryFilter] = useState('')
//   const filterProduct = Data.filter((product) => {
//   //  return product.category.toLowerCase().includes(categoryFilter)
//    return (product.category.toLowerCase().includes(categoryFilter) ||
//    product.title.toLowerCase().includes(categoryFilter)
//   )
//   })

//   return (
//     <>
//       <h1>Product List</h1>
//       <div className='search-box'>
//         <input type="text" name="search-product" id="search-product"
//           placeholder='search product....'
//           onChange={(e) => setcategoryFilter(e.target.value)}
//         />
//       </div>
//       <div className="product-list">
//         {
//           filterProduct.length > 0 ? (
//           filterProduct.map((Value , index) => {
//             return (
//               <ProductCard Products={Value} key={index}/>
//             )
//           })
//         ):(
//           <p>Product is not found</p>
//         )
//         }
//       </div>
//     </>
//   )

// }

function ProductList() {
  // const [data, setdata] = useState(Productdata)
  const [productData, setdata] = useState([])

  useEffect(() => {
  async function fetchData(){
   await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((product) => {
          setdata(product.products)
        })
      }
      fetchData()
  }, [])
  
  const [saearchData, setsearchData] = useState('')
  const filterData = productData.filter((product) => {
    return (product.category.toLowerCase().includes(saearchData) ||
      product.title.toLowerCase().includes(saearchData)
    )
  })
  

  return (
    <>
      {/* <h1>Product List</h1> */}
      <div className='search-box'>
        <input type="text" name="search-product" id="search-product"
          placeholder='search product....'
          onChange={(e) => setsearchData(e.target.value)}
        />
      </div>
      <div className="product-list">
        {
          filterData.length > 0 ? (
            filterData.map((Value, index) => {
              return (
                <ProductCard Products={Value} key={index} />
              
              )
            })
          ) : (
            <p>Product is not found</p>
           
          )
        }
      </div>
    </>
  )

}


export default ProductList
