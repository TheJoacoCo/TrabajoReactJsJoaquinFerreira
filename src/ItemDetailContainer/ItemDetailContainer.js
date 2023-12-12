import React, { useState } from "react";
import Item from "./Item";

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);

    return (
        <div>
            {item && (
                <Item item={item} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
