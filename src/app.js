import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const App = () => {
    const [categoryId, setCategoryId] = useState("");

    return (
        <BrowserRouter>
            <div>
                <Navbar categoryId={categoryId} setCategoryId={setCategoryId} />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/category/:id" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
