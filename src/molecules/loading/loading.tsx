import { ReactElement } from "react"

export const Loading = (): ReactElement => {
    return (
        <div className="p-2">
           <div className="animate-spin_medium border-4 border-r-indigo-600 rounded-full min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]"></div>
        </div>
    )
}