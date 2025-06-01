export default function Dialog({children}){
    return(
        <div className="bg-black/30 fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full">
            {children}
        </div>
    )
}