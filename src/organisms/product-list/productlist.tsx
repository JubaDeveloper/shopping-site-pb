import { ReactElement } from "react";
import { ProductBox } from "../../molecules/product/productbox";

interface IProductData {
    imgSrc: string
    shortDesc: string
    price: number | string
}

interface IProductListProp {
    products: IProductData[]
}

export const ProductList = ({
    products
}: IProductListProp): ReactElement => {
    return (
       <ul>
            {
                products.map(({ imgSrc, shortDesc, price}, i) => {
                    return <li key={i}>
                        <ProductBox 
                            imgSrc={imgSrc} 
                            shortDesc={shortDesc} 
                            price={price}/>
                    </li>
                })
            }
       </ul>
    )
}