import { ReactElement } from "react";
import { Header } from "../../molecules/header/header";
import { Cart } from "../../molecules/cart/cart";

export const HeaderBase = (): ReactElement => {
    return (
        <Header>
            <Cart/>
        </Header>
    )
}