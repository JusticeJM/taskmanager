
export default function TaskFeature({children, title, description}){
    return(
        <div className=" bg-gray-50 w-full flex flex-col border border-gray-100 rounded-lg shadow-sm px-3 py-5 text-left cursor-pointer hover:bg-violet-100 ">
            <div className="flex items-center w-7 p-1 rounded-full bg-violet-200">
                {children}
            </div>
            <div className="font-sans pt-4">
                <h4 className="text-lg font-semibold mb-1.5">{title}</h4>
                <p className="text-sm font-normal text-black/75">{description}</p>
            </div>
        </div>
    )
}