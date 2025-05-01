import StarRating from "./Rating"


function Productdetail() {


    return (
        <>
            <div className="product-detail">
                <div className="image">
                    <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="Beauty Product" className="product-img" />
                </div>
                <div className="detail">
                  <h3 className="title">Essence Mascara Lash Princess</h3>
                  <p className="category">Category: Beauty</p>
                  <p className="brand"><span>Brand:</span> Essence</p>
                  <StarRating /> 
                  <p>50 Products are available only</p>
                  
                </div>


            </div>
        </>
    )

}

export default Productdetail
