import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import SocialMedia from "../menus/SocialMedia"
import GlobalMenu from "../menus/GlobalMenu";
import './Header.scss'

export default () => {

    const btnLogin = document.querySelector("#btnLogin"),
        btnLogout = document.querySelector("#btnLogout");

    if (localStorage.length > 0) {
        btnLogin.style.display = "none";
        btnLogout.style.display = "block";
    }

    // btnLogout.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     ls.cleanStorage();
    //     location.reload();
    // });

    return (
        <>
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
                        <Col xs={12}>
                            <GlobalMenu />
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="modal fade" id="modalLogginRegister" tabIndex="-1" aria-labelledby="modalLogginRegisterLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10">
                                    <div className="forms">
                                        <ul className="nav nav-tabs" id="tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">
                                                    Iniciar sesión
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">
                                                    Registrarse
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="tabsContent">
                                            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                                <div className="forms-login">
                                                    {/* <p>Completa el siguiente formulario para inciar sesión en nuestra tienda.</p> */}
                                                    <input type="text" className="form-control" placeholder="Correo electrónico" aria-label="Correo electrónico" required />
                                                    <input type="text" className="form-control" placeholder="Contraseña" aria-label="Contraseña" required />
                                                    {/* <p className="mb-0">¿No tienes cuenta? <a href="#" >Regístrate</a></p> */}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                                <div className="forms-register">
                                                    {/* <p>Completa el siguiente formulario para registrarte en nuestra tienda.</p> */}
                                                    <form>
                                                        <div className="row">
                                                            <div className="col">
                                                                <input type="text" className="form-control" name="firstname" placeholder="Nombres" aria-label="Nombres" required />
                                                            </div>
                                                            <div className="col">
                                                                <input type="text" className="form-control" name="lastname" placeholder="Apellidos" aria-label="Apellidos" required />
                                                            </div>
                                                        </div>
                                                        <input type="email" className="form-control" name="email" placeholder="Correo electrónico" aria-label="Correo electrónico" required />
                                                        <input type="password" className="form-control" name="password" placeholder="Contraseña" aria-label="Contraseña" required />
                                                        <input type="password" className="form-control" name="password" placeholder="Repita la contraseña" aria-label="Repita la contraseña" required />
                                                        {/* <p className="lead text-danger mb-2" style="font-size: 14px;">Al hacer clic en el botón "Registrarme" estarás de acuerdo con la política de habeas data.</p> */}
                                                        <button type="submit" className="btn btn-success" id="forms-register-btn">
                                                            Registrarme
                                                        </button>
                                                        <button type="reset" className="btn btn-outline-danger" id="forms-register-reset">
                                                            Reiniciar
                                                        </button>
                                                    </form>
                                                    {/* <p className="mt-2 mb-0">¿Ya tienes cuenta? <a href="#" >Inicia sesión</a></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" className="modal-btn-close">
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}