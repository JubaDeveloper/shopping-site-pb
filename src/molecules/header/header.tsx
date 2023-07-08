import { ReactElement } from "react";

interface IHeaderProps {
    children: ReactElement | ReactElement[]
}

export const Header = ({ children }: IHeaderProps): ReactElement => {
    return (
        <div className="w-full sticky top-0 min-h-20 flex bg-black px-2 py-2 max-h-fit">
            {children}
        </div>
    )
}