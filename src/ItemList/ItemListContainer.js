import React, { useState } from "react";
import Item from "./Item";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemListContainer;
