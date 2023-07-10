import { ChangeEvent, FormEvent, ReactElement, useState } from "react";

interface IProductSearchProps {
    onSearch: (text: string) => unknown
    type: React.HTMLInputTypeAttribute
}

export const ProductSearch = ({
    onSearch,
    type = "text" // Default
}: IProductSearchProps): ReactElement => {
    const [searchText, setSearchText] = useState("")

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { target: { value } } = e
        setSearchText(value)
    }

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        onSearch(searchText)
    }

    return (
        <form onSubmit={handleSearchSubmit} className="flex gap-10 flex-row px-2">
            <input data-testid="product-search-input" type={type} onChange={handleSearchChange} placeholder="Type the product name" className="focus:outline-none appearance-none placeholder:px-2 text-lg min-h-[45px] min-w-[390px] rounded-lg border-2 border-black"/>
            <button data-testid="product-search-btn" className="bg-black text-white font-rbs tracking-wide text-lg px-[30px] rounded-[10px]">
                Search
            </button>
        </form>
    )
}