import { Link } from "react-router-dom"

interface IBackProps {
    previousPath: string,
    previousPathName: string
}

export const Back = ({ previousPath, previousPathName }: IBackProps): React.ReactElement => {
    return (
        <div>
            <Link className={"bg-black text-white border-2 rounded-lg p-2 font-mono text-sm font-mono tracking-widest"} to={previousPath}>
                Return to {previousPathName}
            </Link>
        </div>
    )
}