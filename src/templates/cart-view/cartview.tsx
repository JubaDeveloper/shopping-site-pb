import { products } from "@/api/fakeApi";
import { Back } from "@/molecules/back/back";
import { IProductProp } from "@/molecules/product/productbox";
import { HeaderBase } from "@/organisms/header-base/headerbase";
import { ProductListCart } from "@/organisms/product-list-cart/productlist";
import { ReactElement, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const CartView = (): ReactElement => {
    const [itemsStorage] = useLocalStorage<Array<{ count: number, itemId: string }>>("@cart-items", [])
    const [items, setItems] = useState<(IProductProp & { quanty: number })[]>([])

    useEffect(() => {
        const itemsResult = []
        for (const item of itemsStorage) {
            const itemInfo = products.find(p => p.id === item.itemId)
            if (itemInfo) {
                itemsResult.push({
                    quanty: item.count,
                    ...itemInfo
                })
            }
        }
        setItems(itemsResult)
    }, [])
    return (
        <div>
            <HeaderBase/>
            <Back previousPath="/" previousPathName="start"/>
            <ProductListCart products={items}/>
        </div>
    )
}