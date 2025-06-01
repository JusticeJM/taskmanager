export default function TaskRightCard({children, cardDetail, stats}){
    return(
        <div className="bg-white/25 border-1 border-gray-200 flex flex-col items-center gap-1 w-full px-2 py-3 rounded-lg">
            <div className="flex items-center justify-center p-1 w-7 bg-violet-200 rounded-full">
                {children}
            </div>
            <span className="text-sm font-medium text-black/50">{cardDetail}</span>
            <span className="text-lg font-bold text-black/75">{stats}</span>
        </div>
    )
}