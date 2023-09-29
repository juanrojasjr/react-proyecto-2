import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Product.scss";

export default ({product}) => {
    const { id, title, price, image } = product;

    return (
        <Col xs={12} md={3} className="product">
            <Card>
                <div className="card-image">
                    <Card.Img variant="top" src={image} alt={title} />
                </div>
                <Card.Body>
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                    </div>
                    <Link to={`/products/${product.id}`} key={product.id} className="character-card">
                        Leer más <i className="bi bi-arrow-right"></i>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};
