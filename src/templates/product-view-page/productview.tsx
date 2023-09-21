import { Back } from "@/molecules/back/back"
import { ReactElement, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fakeApi from "../../api/fakeApi"
import { ProductView } from "../../molecules/product-view/productview"
import { HeaderBase } from "../../organisms/header-base/headerbase"
import { ResourceLoading } from "../../organisms/resource-loading/resourceloading"

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
            <Back previousPath="/" previousPathName="start"/>
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