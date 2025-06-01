export default function ReviewRateCard({children, rateTitle, taskCount, completeRate, incompleteRate}){
    return(
        <div className="w-full p-3 bg-white/25 border-1 border-gray-200 rounded-md font-sans">
            <div className="flex items-center gap-3 pb-2 border-b border-b-gray-300">
                <div className="p-1 w-7 flex item-center justify-center text-black/95 bg-gray-300 rounded-full">
                    {children}
                </div>
                <span className="text-lg font-medium text-black/70">{rateTitle}</span>
            </div>
            <div className="flex flex-col pt-2">
                <span className="text-base font-semibold text-gray-900"> Total tasks: {taskCount}</span>
                <span className="text-sm font-medium text-violet-900"> Complete Rate: {completeRate}%</span>
                <span className="text-sm font-medium text-violet-900"> Incomplete Rate: {incompleteRate}%</span>
            </div>
        </div>
    )
}