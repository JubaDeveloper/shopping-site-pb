import { ReactElement, useState } from "react"
import { IProductProp } from "../product/productbox"
import { useLocalStorage } from "usehooks-ts"
import { ICartItemsShape } from "../cart/cart"

export const ProductView = ({
    imgSrc,
    shortDesc,
    price,
    id
}: IProductProp): ReactElement => {
    const [cartItems, setCartItems] = useLocalStorage<ICartItemsShape[]>("@cart-items", [])
    const [quantyToAdd, setQuantyToAdd] = useState(1)

    const updateCartItems = (): void => {
        const refItemIndex = cartItems.findIndex(item => item.itemId == id)
        if (refItemIndex != -1) {
            const updatingItems = cartItems.copyWithin(0)
            updatingItems[refItemIndex] = {
                ...updatingItems[refItemIndex],
                count: updatingItems[refItemIndex].count + 1
            }

            setCartItems(updatingItems)
            return
        }
        setCartItems([...cartItems, {
            count: 1,
            itemId: id
        }])
    }

    return (
        <div className="md:max-w-[750px] font-rbs tracking-wider p-2 flex flex-col gap-10">
            <div className="flex flex-row justify-between px-4">
                <div>
                    <img alt="Product image" src={imgSrc} className="min-w-[300px] min-h-[350px] md:max-w-[300px] md:max-h-[300px]"/>
                </div>
                <div className="text-3xl font-roboto mt-auto">
                    <p>
                        R$ {price}
                    </p>
                </div>
            </div>
            <div>
                <p className=" tracking-widest">
                    {shortDesc}
                </p>
            </div>
            <div className="w-full h-fit flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                    <div className="text-2xl font-rbs h-full flex items-center">
                        <span
                        >{quantyToAdd}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span
                        className="w-full"
                        onClick={(): void => {
                            setQuantyToAdd(quantyToAdd + 1)
                        }}>
                            <svg width="25" height="25" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 0L14.8612 12.75H0.138784L7.5 0Z" className="fill-black"/>
                            </svg>
                        </span>
                        <span
                        className="w-full"
                        onClick={(): void => {
                            quantyToAdd > 1 && setQuantyToAdd(quantyToAdd - 1)
                        }}>
                            <svg width="25" height="25" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 13L14.8612 0.25H0.138784L7.5 13Z" className="fill-black"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <button className="bg-black text-white py-3 px-10 rounded-lg text-lg mt-auto">
                    Add to cart
                </button>
            </div>
        </div>
    )
}