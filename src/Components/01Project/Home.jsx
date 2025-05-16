import { useState } from "react";
import AboutPage from "./About";
import ContactPage from "./Contact";
import './css/about.css';
import "tailwindcss";

import { Link } from "react-router";

function HomePage() {
  const products = [
    { id: 1, name: 'Shoes', price: '$19.99', image: 'https://cdn.clippingpath.in/wp-content/uploads/2017/11/clipping_path_with_shadow_after_01.jpg' },
    { id: 2, name: 'Fashion', price: '$29.99', image: 'https://ortery.com/wp-content/uploads/2019/04/gold-purse-1024x965.jpg' },
    { id: 3, name: 'Skin care', price: '$39.99', image: 'https://images.wondershare.com/pixcut/assets/blog/product-images-for-ecommerce-sitse-3.jpg' },
    { id: 4, name: 'Gadgets', price: '$49.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVQfn3LtFU6zNDbiN-84u_fJZ9bEO-VvWeA&s' },
  ];
  return (
    <>
      <section className="hero">
        <div className="info">
          <h2 className="text-red-600">Welcome to Our Store</h2>
          <p>Find the best products at unbeatable prices.</p>
          <button><Link className="productlist" to= '/Products'>Shop Now</Link></button>
        </div>
        <div className="img">
          <img src="https://png.pngtree.com/png-vector/20240310/ourmid/pngtree-spruce-up-ecommerce-product-listings-for-the-holidays-png-image_11925836.png" alt="" width={"400px"} height={"400px"}/>
        </div>
      </section>
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>


    // <div className="home">
    //   <h1>Welcome to the Home Page</h1>
    //   {/* <p>Data: {data}</p>
    //   <button onClick={updatevalue}>Click me Update data</button> */}
    // </div>
  );
}


export default HomePage;
