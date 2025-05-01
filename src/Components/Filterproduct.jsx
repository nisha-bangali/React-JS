import { useState } from "react"

function FilterProduct({ Products }) {

    // console.log(Products);

    // const [filtercategory, setcategory] = useState("")
    // const filteredProduct = Products.filter((product) => {
        
    //     return (
    //         product.category.toLowerCase().includes(filtercategory.toLowerCase())
    //     )
    // })

    // console.log(setcategory());


    return (
        <>
            <div className='search-box'>
                <input type="text" name="search-product" id="search-product"
                    placeholder='search product....'
                    value={filtercategory}
                    onChange={(e) => setcategory(e.target.value)}
                />
            </div>
            <div className="filterdata">
                {
                    // filteredProduct.length > 0 ? (
                        filteredProduct.map((data) => {
                           
                            <div className="product-card" key={data.id}>
                                <img className="product-image" src={data.image} />
                                <div className="product-details">
                                    <h3 className="product-title">{data.title}</h3>
                                    <p className="product-category">{data.category}</p>
                                    <p className="product-description">{data.description}</p>

                                    <div className="product-footer">
                                        <span className="product-price">${data.price}</span>
                                        <button className="add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                })
            }
            </div>

        </>
    )


}
export default FilterProduct