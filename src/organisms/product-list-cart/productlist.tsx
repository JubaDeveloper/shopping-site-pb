import { ProductCart } from "@/molecules/product-cart/productcart";
import { ReactElement } from "react";

interface IProductData {
    imgSrc: string
    shortDesc: string
    price: number | string
}

interface IProductListProp {
    products: (IProductData & { id: string, quanty: number })[]
}

export const ProductListCart = ({
    products
}: IProductListProp): ReactElement => {
    console.log(products)
    return (
       <ul>
            {
                products.map((p, i) => {
                    return <li key={i}>
                        <ProductCart {...p}/>
                    </li>
                })
            }
       </ul>
    )
}