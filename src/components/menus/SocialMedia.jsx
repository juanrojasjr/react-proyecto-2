import { React } from "react";
import Items from "./Items";
import "./SocialMedia.scss";

export default () => {
    const elements = [
        { id: 0, name: "facebook", href: "https://facebook.com" },
        { id: 1, name: "twitter", href: "https://twitter.com" },
        { id: 2, name: "instagram", href: "https://instagram.com" },
    ];

    return (
        <ul className="nav social-list">
            <Items arr={elements} />
        </ul>
    );
};
