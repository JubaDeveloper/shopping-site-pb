import { ReactElement, useEffect, useState } from "react"
import { useLocalStorage } from "usehooks-ts"

interface ICartItemsShape {
    itemId: string
    count: number
}

export const Cart = (): ReactElement => {
    const [cartItems] = useLocalStorage<ICartItemsShape[]>("@cart-items", [])
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const setItemsCount = (items: ICartItemsShape[]): void => {
        let count = 0
        for (const it of items) {
            count += it.count
        }
        setCartItemsCount(count)
    }

    useEffect(() => {
        setItemsCount(cartItems)
    }, [cartItems])

    return (
        <div className="flex flex-row">
            <div>
                <svg width="71" height="74" viewBox="0 0 71 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 46.6667C27.1667 46.6667 25.6833 48.1667 25.6833 50C25.6833 51.8333 27.1667 53.3333 29 53.3333C30.8333 53.3333 32.3333 51.8333 32.3333 50C32.3333 48.1667 30.8333 46.6667 29 46.6667ZM19 20V23.3333H22.3333L28.3333 35.9833L26.0833 40.0667C25.8167 40.5333 25.6667 41.0833 25.6667 41.6667C25.6667 43.5 27.1667 45 29 45H49V41.6667H29.7C29.4667 41.6667 29.2833 41.4833 29.2833 41.25L29.3333 41.05L30.8333 38.3333H43.25C44.5 38.3333 45.6 37.65 46.1667 36.6167L52.1333 25.8C52.2667 25.5667 52.3333 25.2833 52.3333 25C52.3333 24.0833 51.5833 23.3333 50.6667 23.3333H26.0167L24.45 20H19ZM45.6667 46.6667C43.8333 46.6667 42.35 48.1667 42.35 50C42.35 51.8333 43.8333 53.3333 45.6667 53.3333C47.5 53.3333 49 51.8333 49 50C49 48.1667 47.5 46.6667 45.6667 46.6667Z" fill="#666666"/>
                </svg>
            </div>
            <div className="mt-auto font-rbs">
                {cartItemsCount}
            </div>
        </div>
    )
}