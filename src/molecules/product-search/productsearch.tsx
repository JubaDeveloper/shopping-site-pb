import { ReactElement } from "react";

export const ProductSearch = (): ReactElement => {
    return (
        <div className="flex gap-10 flex-row px-2">
            <input placeholder="Type the product name" className="focus:outline-none appearance-none placeholder:px-2 text-lg min-h-[45px] min-w-[390px] rounded-lg border-2 border-black"/>
            <button className="bg-black text-white font-rbs tracking-wide text-lg px-[30px] rounded-[10px]">
                Search
            </button>
        </div>
    )
}