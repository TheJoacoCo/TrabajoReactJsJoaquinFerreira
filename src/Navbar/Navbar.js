import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ categoryId, setCategoryId }) => {
    const [categories, setCategories] = useState([]);

    return (
        <nav>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
