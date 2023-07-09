import { ReactElement } from "react";
import { ProductBox } from "../../molecules/product/productbox";

interface IProductData {
    imgSrc: string
    shortDesc: string
    price: number | string
}

interface IProductListProp {
    products: (IProductData & { id: string })[]
}

export const ProductList = ({
    products
}: IProductListProp): ReactElement => {
    return (
       <ul>
            {
                products.map(({ imgSrc, shortDesc, price, id }, i) => {
                    return <li key={i}>
                        <ProductBox
                            imgSrc={imgSrc}
                            shortDesc={shortDesc}
                            id={id}
                            price={price}/>
                    </li>
                })
            }
       </ul>
    )
}