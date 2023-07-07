import { ReactElement } from "react";
import { ProductBox } from "../../molecules/product/productbox";
import { Link } from "react-router-dom";

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
                        <Link to={`/product/${id}`}>
                            <ProductBox 
                                imgSrc={imgSrc} 
                                shortDesc={shortDesc} 
                                price={price}/>
                        </Link>
                    </li>
                })
            }
       </ul>
    )
}