import { ReactElement, useEffect, useState } from "react"
import { ProductSearch } from "../../molecules/product-search/productsearch"
import fakeApi from "../../api/fakeApi"
import { ProductList } from "../../organisms/product-list/productlist"
import { ResourceLoading } from "../../organisms/resource-loading/resourceloading"
import { HeaderBase } from "../../organisms/header-base/headerbase"

interface IProductShape {
    imgSrc: string,
    shortDesc: string,
    price: number | string,
    id: string
}

export const InitialPage = (): ReactElement => {
    const [fetched, setFetched] = useState(false)
    const [products, setProducts] = useState<IProductShape[]>([])
    const [filteredProducts, setFilteredProducts] = useState<IProductShape[]>([])
    useEffect(() => {
        fakeApi.getProducts().then((e: unknown) => {
            setProducts(e as IProductShape[])
            setFilteredProducts(e as IProductShape[])
            setFetched(true)
        }).catch((e) => {
            console.error(e)
            setFetched(true)
        })
    }, [])

    const handleSearchChange = (text: string): void => {
        setFilteredProducts(products.filter(p => p.shortDesc.toLowerCase().includes(text.toLowerCase())))
    }

    return (
        <>
            <HeaderBase/>
            <div className="p-2">
                <ProductSearch type={"search"} onSearchChange={handleSearchChange}/>
                {fetched ? <ProductList products={filteredProducts}/> : <ResourceLoading resourceName="Products"/>}
            </div>
        </>
    )
}