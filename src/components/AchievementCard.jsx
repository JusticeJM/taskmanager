export default function AchievementCard({children, status, count}){
    return(
        <div className="p-3 bg-white/220 border border-gray-200 rounded-md w-full">
            <div className="inline-flex items-center space-x-2">
                <div className="p-1 w-7  bg-gray-200 flex item-center justify-center text-black/95 rounded-full">
                    {children}
                </div>
                <span className="text-lg font-semibold text-black/65">{status}</span>
            </div>
            <span className="text-base font-medium text-black/90 block w-full">{count}</span>
        </div>
    )
}