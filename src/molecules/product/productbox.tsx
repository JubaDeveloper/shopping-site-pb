import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

export interface IProductProp {
    shortDesc: string
    price: number | string
    imgSrc: string
    id: string
}

export const ProductBox = ({ shortDesc, price, imgSrc, id }: IProductProp): ReactElement => {
    const navigate = useNavigate()

    const navigateToCart = (): void => {
        navigate(`/product/${id}`, {
        })
    }

    return (
        <div className="my-2 select-none rounded-lg md:min-w-[700px] max-w-[700px] h-fit min-h-[200px] flex flex-row gap-[14px] px-5 py-2 hover:shadow-xl">
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
                    <p className="font-rbs font-extralight text-[20px] tracking-wide whitespace-nowrap">
                        R$ {price}
                    </p>
                </div>
                <div onClick={navigateToCart} className="cursor-pointer z-[2] w-full flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26" fill="none">
                        <path d="M12.9008 10.0238H15.381V6.45238H19.1012V4.07143H15.381V0.5H12.9008V4.07143H9.18056V6.45238H12.9008V10.0238ZM7.94048 20.7381C6.57639 20.7381 5.47272 21.8095 5.47272 23.119C5.47272 24.4286 6.57639 25.5 7.94048 25.5C9.30456 25.5 10.4206 24.4286 10.4206 23.119C10.4206 21.8095 9.30456 20.7381 7.94048 20.7381ZM20.3413 20.7381C18.9772 20.7381 17.8735 21.8095 17.8735 23.119C17.8735 24.4286 18.9772 25.5 20.3413 25.5C21.7054 25.5 22.8214 24.4286 22.8214 23.119C22.8214 21.8095 21.7054 20.7381 20.3413 20.7381ZM8.15129 16.869L8.18849 16.7262L9.30456 14.7857H18.5432C19.4732 14.7857 20.2917 14.2976 20.7133 13.5595L25.5 5.21429L23.3423 4.07143H23.3299L21.9658 6.45238L18.5432 12.4048H9.8378L9.67659 12.0833L6.89881 6.45238L5.72073 4.07143L4.55506 1.69048H0.5V4.07143H2.98016L7.44444 13.1071L5.77034 16.0238C5.57192 16.3571 5.46032 16.75 5.46032 17.1667C5.46032 18.4762 6.57639 19.5476 7.94048 19.5476H22.8214V17.1667H8.46131C8.3001 17.1667 8.15129 17.0357 8.15129 16.869Z" fill="#545454"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}