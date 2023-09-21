import { ReactElement, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { IProductProp } from "../product/productbox";

export const ProductCart = ({
    imgSrc,
    shortDesc,
    quanty,
    id
}: IProductProp & { quanty:  number }): ReactElement => {
    const [itemsStorage, setItemStorage] = useLocalStorage<Array<{ count: number, itemId: string }>>("@cart-items", [])
    const [itemQuanty, setItemQuanty] = useState(quanty)

    const removeItemFromCart = (): void => {
        const updatedItems = itemsStorage.filter(item => item.itemId != id)
        setItemStorage(updatedItems)
        location.reload()
    }

    const handleQuantyChange = (count: number): void => {
        const ref = itemsStorage.copyWithin(0, 0)
        const item = ref.find(item => item.itemId === id)
        if (item) {
            item.count = count
            if (item.count === 0) {
                removeItemFromCart()
                return
            } else {
                setItemQuanty(item.count)
            }
        }
        setItemStorage(ref)
    }

    return (
        <div data-testid={"product-box"} className="my-2 select-none rounded-lg md:min-w-[700px] max-w-[700px] h-fit min-h-[200px] flex flex-row gap-[14px] px-5 py-2 hover:shadow-xl">
        <div className="bg-white rounded-lg min-w-[150px] min-h-fit flex items-center justify-center">
            <img className="max-w-[150px] max-h-[150px]" src={imgSrc} alt="Product image"/>
        </div>
        <div className="w-full max-w-lg text-left py-2">
            <p className="text-sm font-[Roboto Condensed] tracking-widest">
                {shortDesc.substring(0, 200)}{shortDesc.length > 200 && "..."}
            </p>
        </div>
        <div className="w-fit flex flex-col justify-between pb-5 pt-2">
            <div className="w-fit">
                <input onChange={(e): void => {
                    handleQuantyChange(Number(e.target.value))
                }} value={itemQuanty} type="number" className="w-[50px] font-rbs font-extralight text-[20px] tracking-wide whitespace-nowrap"/>
            </div>
            <div onClick={removeItemFromCart} className="cursor-pointer z-[2] w-full flex justify-center">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="26" height="26" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_32_49" transform="scale(0.0104167)"/>
                        </pattern>
                        <image id="image0_32_49" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACVElEQVR4nO2aTYoUQRSEY+N6Bk+h7tx4Acd7uRT8QY+jN5CG3ug1ZFpnOUJIQzaIiGZVvap4lS8+iF2T3fVFZWbXD2CMMcYYY4wxuXgJgAvzSn0QleXTJejl0yXo5XPkElg8clg8clg8clg8clg8clg8clg8clg8xhhjjDHGGCNHfWHE6hdeakF0AXpJ9AzQi6KXoDGTHrUgugC9JHoG6EXRS9CYSY9aEF2AXhI9A/Si6CVonoQTgBcAPgcKPAJ4DuBbwFjpWSr/WRvnKqiEs/yHbcynASWkJ0I+gkr4XT6CSkhPlPylJfxNfkQJ6YmUP7eEf8lfWkJ6ph7QTee41wAOHeMd2md7OH93+QKOHWdr70yIHKvMDGCQuC3kD1sAFwrcSv7QBXCmyC3lD18AJ26i1xM/27OJly+AE8/qHqKuqkvMAM5YjraSX6oABpQQLb9cAVxQwhrySxbAGSWsJd8FdOICvATpyCD/gjdhofwL/hsqlH/BF2IT5B98K2IZWy07V74ZF1vA0bejY9haPgPHKHkhdvQjSW0BN53j+qH8SgWc/FpKLHPW1ZNfzNIWQL+aqC+AfjlXXwAB3LaNOeIB+iWHNuZtwFjp4eBJj1oQXYBeEj0D9KLoJWjMpEctiC5AL4meAXpRrLoE/UggiSvlO3bA1wSiuFK+YAe8SyCKK+U1dsATAD8TyGJw7gE8wk74kEAYg3Oe2bvhAYBPCaQxKB/bMe2K8w9+36Yud5r7dubvTv6fe8Lb9g/iLoFU/id37be+AfBYLc8YY4wxxhiD4fgF55Y0ZM+ioLoAAAAASUVORK5CYII="/>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
    )
}