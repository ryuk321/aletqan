import React from "react";
import "./style.scss";

// function Card({ title, text, ...props }) {
//     return (
//         <ul className="card-wrapper">
//             <li className="card">
//                 <img
//                     src={dubai}
//                     alt=""
//                 />
//                 <h3>
//                     <a href="">{title}</a>
//                 </h3>
//                 <p>{text}</p>
//             </li>
//         </ul>
//     );
// }

function Cards({ image, title, text }) {
    return (
        <div className="CARD">
            <figure className="image-block">
                <h1>{title}</h1>
                <img
                    src={image}
                    alt=""
                />
                <figcaption>
                    <h3>More Info</h3>
                    <p>{text}</p>
                    <button>More Info</button>
                </figcaption>
            </figure>
        </div>
    );
}

export default Cards;
