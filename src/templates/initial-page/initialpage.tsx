import { ReactElement, useEffect, useState } from "react"
import { ProductSearch } from "../../molecules/product-search/productsearch"
import fakeApi from "../../api/fakeApi"
import { ProductList } from "../../organisms/product-list/productlist"
import { ResourceLoading } from "../../organisms/resource-loading/resourceloading"

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
        fakeApi.getProducts().then((e) => {
            setProducts(e)
            setFilteredProducts(e)
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
        <div className="p-2">
            <ProductSearch type={"search"} onSearchChange={handleSearchChange}/>
            {fetched ? <ProductList products={filteredProducts}/> : <ResourceLoading resourceName="Products"/>}
        </div>
    )
}