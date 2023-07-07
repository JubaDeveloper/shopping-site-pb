import { Loading } from "../../molecules/loading/loading"

interface IResourceProps {
    resourceName: string
}

export const ResourceLoading = ({
    resourceName
}: IResourceProps) => {
    return (
        <div className="flex flex-row gap-2 items-center font-rbs lg:text-base xl:text-lg">
            <p>{resourceName} is loading</p>
            <Loading/>
        </div>
    )
}