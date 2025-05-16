import { useEffect, useState } from "react"
import StarRating from "./Rating"
import { Link, useParams } from "react-router"


function Productdetail() {
    const [productDetail, setProductDetail] = useState()
    const { id } = useParams()

   useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then((product) => {
        setProductDetail(product)
    }).catch((err) => console.log(err))
   },[id])
   console.log(productDetail,"product.....");
   

   const discountprice = (productDetail?.price * (productDetail?.discountPercentage) / 100)   
  const finalPrice = (productDetail?.price - discountprice).toFixed(2)

    return (
        <>
            
            <div className="product-detail">
                <div className="image">
                    <img src={productDetail?.images[0]} alt="Beauty Product" className="product-img" />
                </div>
                <div className="detail">
                    <h3 className="title">{productDetail?.title}</h3>
                    <p className="brand">{productDetail?.brand}</p>
                    <StarRating />
                    <p className='dicscountPerc'><strong>Discount: </strong>{productDetail?.discountPercentage}% </p>
                    <p>
                        <span className="product-price"><s>${productDetail?.price} </s></span>
                        <span className='product-discountprice'>${finalPrice} Only</span>
                    </p>
                    <p><b>{productDetail?.stock}</b> Stocks available</p>
                    <p><b>Delivery:</b> {productDetail?.shippingInformation}</p>
                    <p><b>Note: </b>{productDetail?.returnPolicy}</p>
                    <button className='close-detail'><Link to="/products" >Back</Link></button>
                </div>
            </div>


        </>
    )

}

export default Productdetail
