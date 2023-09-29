import React from "react";
import './Carousel.scss';

export default () => {
    //Stop the bucle carousel
    const myCarousel = document.querySelector("#megaCarousel"),
        carousel = new bootstrap.Carousel(myCarousel, { interval: false });

    return (
        <section id="megaCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-video">
                        <video width="100%" height="auto" autoPlay={true} muted loop>
                            <source src="images/dog_toy_Slowmotion_Take_1920x1080.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="carousel-text">
                        <div className="carousel-text--content">
                            <h2>¡Descuento en juguetes!</h2>
                            <p>50% de descuento en todos los juguetes para tu mascota.</p>
                            <a href="#" className="btn btn-dark">
                                <span>Comprar ahora</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/1287/540" className="d-block w-100" alt="..." />
                    <div className="carousel-text">
                        <div className="carousel-text--content">
                            <h2>¡Descuento en juguetes!</h2>
                            <p>50% de descuento en todos los juguetes para tu mascota.</p>
                            <a href="#" className="btn btn-dark">
                                <span>Comprar ahora</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#megaCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#megaCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
        </section>
    );
};
