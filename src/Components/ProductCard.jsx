
import Productdata from '../utility/ProductData'
import Productdetail from './Productdetail'
import StarRating from './Rating'
// import ProductList from './ProductList';

function ProductCard({ Products }) {
  const discountprice = (Products.price * (Products.discountPercentage) / 100)
  const finalPrice = (Products.price - discountprice).toFixed(2)
  

  return (
    
    <div className="product-card" key={Products.id} >
      <img className="product-image" src={Products.images} />
      <div className="product-details">
        <h3 className="product-title">{Products.title}</h3>
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
  )

}

export default ProductCard

