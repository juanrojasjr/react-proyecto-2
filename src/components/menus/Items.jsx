import { React } from "react";

export default ({ arr }) => {
    const listItems = arr.map((ele) => {
        return (
            <li key={ele.id}>
                <a href={ele.href}>
                    <i className={`bi bi-${ele.name}`}></i>
                </a>
            </li>
        );
    });
    return listItems;
};
