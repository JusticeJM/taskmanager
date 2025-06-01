import Dialog from "./Dialog";

export default function ConfirmationDialog(){
    
    return(
        <Dialog>
          <div className="bg-white max-w-lg max-h-full relative py-5 px-4 text-center rounded-lg  border-1 border-black/30 ">  
            <h1 className="text-black/70 text-xl font-semibold pb-4">
                Do you want to delete this task ?
            </h1>
            <div className="inline-flex space-x-4 py-4">
                <button className="bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-red-600"
                    onClick={()=> alert("delete modal")}
                >
                    Yes, Delete
                </button>
                <button className="bg-gray-100 text-black text-sm font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300"
                    onClick={()=> alert("hide modal")}
                >
                    No, Cancel
                </button>
            </div>
          </div>  
        </Dialog>
    )
}