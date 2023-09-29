import { React } from "react";
import { NavLink } from "react-router-dom";
import "./SocialMedia.scss";

export default () => {
    const elements = [
        { id: 0, name: "Inicio", component: '/' },
        { id: 1, name: "Productos", component: "/products" },
    ];

    return (
        <nav className="navbar navbar-expand-lg justify-content-center py-0">
            <ul className="text-uppercase text-center">
                {elements.map((ele) => {
                    return (
                        <li key={ele.id} className="nav-item">
                            <NavLink to={`${ele.component}`} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                                {ele.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
