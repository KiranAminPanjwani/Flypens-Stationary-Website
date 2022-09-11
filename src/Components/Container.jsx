import React from "react";

function Container(j) {
    return (
        <div className="singlejournal">
            <p className="sJ_img">
                <img src={j.image} alt={j.Name + "Journal"} className={j.Name} />
            </p>
            <p className="sJ_name">{j.ProductName}</p>
            <p className="sJ_Price">
                <b>{j.Price}</b>
            </p>
        </div>
    );
}

export default Container;
