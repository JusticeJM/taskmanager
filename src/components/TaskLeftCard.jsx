
export default function TaskLeftCard({children,cardDetails, duration}){
    return(
        <div className="p-2 bg-black/75 rounded-md w-full">
            <div className="p-1 w-7 flex item-center justify-center text-white/95 bg-white/5 rounded-full">
                {children}
            </div>
            <div className="flex flex-col">
                <span className="text-base font-semibold text-white/80">{cardDetails}</span>
                <span className="text-sm font-normal text-white/70">{duration}</span>
            </div>
        </div>
    )
}