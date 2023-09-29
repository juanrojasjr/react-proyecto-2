import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Faqs from "../components/faqs/Faqs";
import Carousel from "../components/carousel/Carousel";

export default () => {
    return (
        <>
            <Header />
            <main>
                <Carousel />
                <section id="categorys" className="pt-6">
                    <div className="container">
                        <div className="sectionTitle">
                            <h2>Categorias</h2>
                            <p>Tenemos todo para tu mascota, sin importar el tamaño.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-4">
                                <div className="cardHover">
                                    <a href="#" className="cardHover__link">
                                        {/* <img className="cardHover__image" src="./assets/dog-optimice-freepik.jpg" alt="" /> */}
                                        <div className="cardHover__content">
                                            <h3>Perros</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="cardHover">
                                    <a href="#" className="cardHover__link">
                                        {/* <img className="cardHover__image" src="./assets/cat-optimice-freepik.jpg" alt="" /> */}
                                        <div className="cardHover__content">
                                            <h3>Gatos</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="cardHover">
                                    <a href="#" className="cardHover__link">
                                        {/* <img className="cardHover__image" src="./assets/rabbit-optimice-freepik.jpg" alt="" /> */}
                                        <div className="cardHover__content">
                                            <h3>Otros</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="blog" className="pt-6">
                    <div className="container">
                        <div className="sectionTitle">
                            <h2>Nuestro blog</h2>
                            <p>Noticias, recomendaciones, ejercicios y de más que tu perrito querrá.</p>
                        </div>
                        <div className="row"></div>
                    </div>
                </section>
                <section id="faqs" className="py-6">
                    <div className="container">
                        <div className="sectionTitle">
                            <h2>Preguntas frecuentes</h2>
                            <p>Resolvemos tus preguntas.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8">
                                <div className="accordion" id="accordionFaqs">
                                    <Faqs />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}