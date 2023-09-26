import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SocialMedia from "../menus/SocialMedia"

export default () => {
    return (
        <header>
            <Container>
                <Row className="py-4">
                    <Col xs={6} md={3} className="d-flex align-items-end order-2 order-md-1 mt-4 mt-md-0">
                        <SocialMedia />
                    </Col>
                    <Col xs={12} md={6} className="text-center order-1">
                        <a href="/">
                            <img src="/logo/logo-vertical.svg" alt="Logo del sitio" width="180" className="logo" />
                        </a>
                    </Col>
                    <Col xs={12} md={3} className="d-flex align-items-end justify-content-end order-3 mt-4 mt-md-0">
                        <button type="button" className="btn btn-outline-dark rounded-pill" id="btnLogin" data-bs-toggle="modal" data-bs-target="#modalLogginRegister">
                            Iniciar sesión
                        </button>
                        <button type="button" className="btn btn-outline-dark rounded-pill" id="btnLogout" style={{ display: "none" }}>
                            Cerrar sesión
                        </button>
                    </Col>
                </Row>
                <Row className="border-top border-secondary">
                    <Col xs={12}></Col>
                </Row>
            </Container>
        </header>
    );
}