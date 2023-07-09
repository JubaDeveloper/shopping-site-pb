import { ReactElement, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fakeApi from "../../api/fakeApi"
import { ResourceLoading } from "../../organisms/resource-loading/resourceloading"
import { ProductView } from "../../molecules/product-view/productview"
import { HeaderBase } from "../../organisms/header-base/headerbase"

export const ProductViewPage = (): ReactElement => {
    const [finishedFetch, setFinishedFetch] = useState(false)
    const [product, setProduct] = useState<{
        imgSrc: string;
        price: number;
        shortDesc: string;
        id: string;
    } | null>(null)
    const { id } = useParams()

    useEffect(() => {
        fakeApi.getProductById({ id: id ?? "" }).then((r) => {
            if (r) {
                setProduct(r)
            }
        }).finally(() => {
            setFinishedFetch(true)
        })
    })

    return (
        <>
            <HeaderBase/>
            <div className="p-2">
                {finishedFetch ? (product &&
                <ProductView
                    shortDesc={product.shortDesc}
                    price={product.price}
                    id={product.id}
                    imgSrc={product.imgSrc}/>
                ) : <ResourceLoading resourceName="Product"/>}
            </div>
        </>
    )
}