import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialMedia from "../menus/SocialMedia";
import './Footer.scss';

export default () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="text-center my-2">
                            <img src="/logo/logo-vertical-blanco.svg" alt="Logo del sitio" width="180" className="logo" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="footer--menu">
                            <ul className="nav navbar"></ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <SocialMedia />
                        <p className="copyright">&copy; Todos los derechos reservados 2023.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}