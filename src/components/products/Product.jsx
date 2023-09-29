import React from "react";
// import "../assets/css/Product.css";

export default ({product}) => {
    const { id, title, price, image } = product;

    return (
        <div className="product">
            {console.log(product)}
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price}</p>
            {/* <button onClick={() => addToCart(id)}>Add to cart</button> */}
        </div>
    );
};
