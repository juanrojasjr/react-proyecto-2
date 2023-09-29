import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductsList from "../components/products/ProductsList";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/ProductDetails";

export default () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        let url = `https://fakestoreapi.com/products/`;
        if (id != null) url += id;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    function ReturnComponent ({id}) {
        if (id == null) {
            return <ProductsList products={products} />;
        } else {
            return <ProductDetails products={products} />;
        }
    };

    return (
        <>
            <Header />
            <ReturnComponent id={id} />
            <Footer />
        </>
    );
};
