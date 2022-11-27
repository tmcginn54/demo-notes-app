import React from "react";
import "./NotFound.css";

import Image from "react-bootstrap/Image";

export default function NotFound() {
    return (
        <div className="NotFound text-center">
            <h3>Sorry, page not found!</h3>
            <Image fluid rounded src="https://golf.com/wp-content/uploads/2020/08/TEE-SHOTS-e1596475721332.jpg"/>
        </div>
           
    );
}