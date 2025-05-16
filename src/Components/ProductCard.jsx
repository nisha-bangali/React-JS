
import { useState } from 'react'
import Productdata from '../utility/ProductData'
import Productdetail from './Productdetail'
import StarRating from './Rating'
import { Link } from 'react-router'
// import ProductList from './ProductList';

function ProductCard({ Products }) {
  const discountprice = (Products.price * (Products.discountPercentage) / 100)
  const finalPrice = (Products.price - discountprice).toFixed(2)
  
  // const [selectProduct , setselectProduct] = useState(null)
    
 
  

  return (
    <>
     {/* {
      selectProduct && (
        <div className="product-detail">
        <div className="image">
            <img src={selectProduct.images[0]} alt="Beauty Product" className="product-img" />
        </div>
        <div className="detail">
          <h3 className="title">{selectProduct.title}</h3>
          <p className="brand">{selectProduct.brand}</p>
          <StarRating /> 
          <p className='dicscountPerc'><strong>Discount: </strong>{selectProduct.discountPercentage}% </p>
          <p>
          <span className="product-price"><s>${selectProduct.price} </s></span>
          <span className='product-discountprice'>${finalPrice} Only</span>
          </p>
          <p><b>{selectProduct.stock}</b> Stocks available</p>
          <p><b>Delivery:</b> {selectProduct.shippingInformation}</p>
          <p><b>Note: </b>{selectProduct.returnPolicy}</p>
          <button className='close-detail' onClick={()=> setselectProduct(null)}>Close</button>
        </div>
    </div>
      )
    }  */}
    
    <div className="product-card" key={Products.id}>
      <img className="product-image" src={Products.images[0]} />
      <div className="product-details">
        <Link to={`/products/${Products.id}`} className="product-title">{Products.title}</Link>
        <p className='product-brand'>{Products.brand}</p>
        <p className="product-category">{Products.category}</p>
        <p className="product-description">{Products.description}</p>

        <div className="product-footer">
          <span className='dicscountPerc'>{Products.discountPercentage}%</span>
          <span className="product-price"><s>${Products.price}</s></span>
          <p className='product-discountprice'>${finalPrice}</p>
        </div>
        <StarRating />
        <div className='btn'>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default ProductCard

