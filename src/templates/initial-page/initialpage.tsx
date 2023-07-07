import { ReactElement, useEffect, useState } from "react"
import { ProductSearch } from "../../molecules/product-search/productsearch"
import fakeApi from "../../api/fakeApi"
import { ProductList } from "../../organisms/product-list/productlist"
import { ResourceLoading } from "../../organisms/resource-loading/resourceloading"

export const InitialPage = (): ReactElement => {
    const [fetched, setFetched] = useState(false)
    const [products, setProducts] = useState<{ imgSrc: string, shortDesc: string, price: number | string, id: string }[]>([])
    useEffect(() => {
        fakeApi.getProducts().then((e) => {
            setProducts(e)
            setFetched(true)
        }).catch((e) => {
            console.error(e)
            setFetched(true)
        })
    })
    return (
        <div className="p-2">
            <ProductSearch/>
            {fetched ? <ProductList products={products}/> : <ResourceLoading resourceName="Products"/>}
        </div>
    )
}