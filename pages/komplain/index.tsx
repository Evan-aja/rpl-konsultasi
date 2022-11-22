export default function LamanLaporan(){
    return(
        <>
            <div className="flex flex-nowrap">
            <div className="flex-none p-4 m-2">
            <div className="relative">
                <div className="relative">
                <button type="button" className="inline-block px-7 py-3.5 bg-gray-300 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Laporan</button>
                </div>
                <div className="w-full mt-5">
                </div>
                <div className="relative">
                <button type="button" className="inline-block px-6 py-3.5 bg-gray-300 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Komplain</button>
                </div>
                
            </div>
            </div>

            
            <div className="block rounded-lg shadow-lg bg-gray-400 w-1/2 h-auto text-left mb-40">
            <div className="flex-none">
            <div className="Submission1">
                <div className="mb-3 w-full inline-flex">
                    <div className="ml-10 my-5">
                    <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-white ml-2 mt-2"
                    >Judul:</label>
                    </div>
                    <div className="w-full mx-10 mr-5 mt-5">
                    <input
                    type="text"
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="Judul"
                    placeholder="Judul Komplain"
                    />
                    </div>
                </div>
            </div>
            <div className="Submission2">
                <div className="mb-3 w-full inline-flex">
                    <div className="ml-10 my-5">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-white "
                    >Penjelasan:</label>
                    </div>
                    <div className="w-full ml-3 mr-5 mt-5">
                    <textarea
                    className="
                        form-control
                        block
                        w-full
                        h-96
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="Penjelasan"
                    placeholder="Penjelasan Komplain"
                    ></textarea>
                    </div>
                </div>
                <div className="py-5">
                <button type="submit" className="
                w-5/12
                ml-60
                mr-30
                px-6
                py-2.5
                bg-gray-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                object-right
                rounded-full
                ">Kirim</button>
                </div>
            </div>
            </div>
            </div>
        
        </div>

            
        </>
    )
}