import React from "react";
import Product from "./Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default ({products}) => {
    return (
        <>
            <div className="product-list">
                <Container>
                    <Row className="py-4">
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};
