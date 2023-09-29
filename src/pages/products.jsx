import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductsList from "../components/products/ProductsList";

export default () => {

    return (
        <>
            <Header />
                <ProductsList />
            <Footer />
        </>
    );
}