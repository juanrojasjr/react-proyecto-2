import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import "./ProductDetails.scss";

export default ({ products }) => {
    const { id, title, price, image, description, category } = products;
    const [productsRelation, setProductsRelation] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => response.json())
            .then((data) => setProductsRelation(data))
            .catch((error) => console.log(error));
    }, []);

    function PrintProductsRelation({pr}) {
        console.log(pr);
        pr.map((prItem) => {
            console.log(prItem);
            return <Product product={prItem} />;
        });
    }

    return (
        <div className="wrapper-products-details py-5">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="productDetails-image">
                            <img src={image} alt={title} />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="productDetails-title">
                            <h1>{title}</h1>
                        </div>
                        <div className="productDetails-category">
                            <span className="fw-bold">Descripción:</span> <p>{description}</p>
                        </div>
                        <div className="productDetails-category">
                            <span className="fw-bold">Categoría:</span> <p>{category}</p>
                        </div>
                        <div className="productDetails-price">${price}</div>
                        <a href="#" className="btn btn-success">
                            COMPRAR
                        </a>
                    </Col>
                    <Col xs={12} className="my-5">
                        <div className="productsRelation">
                            <h4>Productos relacionados</h4>
                            <Row>
                                <PrintProductsRelation pr={productsRelation} />
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
