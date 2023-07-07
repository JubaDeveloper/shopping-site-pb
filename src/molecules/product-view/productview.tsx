import { IProductProp } from "../product/productbox"

export const ProductView = ({
    imgSrc,
    shortDesc,
    price
}: IProductProp) => {
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
                <select className="min-h-[10px] max-h-[10px] mt-auto">
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>
                <button className="bg-black text-white py-3 px-10 rounded-lg text-lg mt-auto">
                    Add to cart
                </button>
            </div>
        </div>
    )
}