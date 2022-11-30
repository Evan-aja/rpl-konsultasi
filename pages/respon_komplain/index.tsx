import { Komplain } from "@prisma/client"
import { GetServerSideProps } from "next"
import React from "react"
import handler from "../api/get-komplain"

export function makeSerializable<T extends any> (o: T): T {
    return JSON.parse(JSON.stringify(o))
}

type Props = {
    komplain: Komplain[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const result = await handler()
    return {
      props: { komplain: makeSerializable(result) },
    }
}

const ResponKomplian: React.FC<Props> = props =>{
    return(
        <>
            <div className="overflow-x-hidden overflow-y-auto">
           {props.komplain && props.komplain.map((i) => (
           <div className="body">
            <div className="flex flex-nowrap">

            <div className="flex-none p-4 m-2">
            <div className="relative">
            <div className="relative">
                </div>
                <div className="w-full ml-5">
                </div>
                <div className="relative">
                </div>
                
            </div>
            </div>

            <form className="block rounded-lg shadow-lg bg-gray-400 w-1/2 h-auto text-left mb-10">
            <input hidden readOnly placeholder={i.ID.toString()}/>
            <div className="flex-none">
            <div className="Submission1">
                <div className="mb-3 w-full inline-flex">
                    <label htmlFor="exampleText0" className="form-label inline-block mb-2 text-white ml-2 mt-5"
                    >Judul:</label>
                    <div className="w-full  ml-14 mr-4 mt-4">
                   
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
                    name="Judul"
                    placeholder={i.Judul?.toString()}
                    />
                    </div>
                </div>
            </div>
            <div className="Submission2">
                <div className="mb-3 w-full inline-flex">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-white ml-2"
                    >Penjelasan:</label
                    >
                    <div className="w-full ml-4 mr-4 mt-2">
                    <textarea
                    className="
                        form-control
                        block
                        w-full
                        h-52
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
                    name="Penjelasan"
                    placeholder={i.Penjelasan?.toString()}
                    ></textarea>
                     </div>
                </div>
                <div className="flex mt-3 mb-5">
                <button type="submit" className="
                w-5/12
                px-6
                py-2.5
                bg-gray-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                object-right
                mx-32
                ">Terima</button>
                <button type="submit" className="
                w-5/12
                px-6
                py-2.5
                bg-gray-500
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                object-right
                mx-32
                ">Tolak</button>
                </div>
            </div>
            </div>
            </form>
        
        </div>
        </div>
        ))}
        <div className="m-24"/>
        </div>
        </>
    )
}

export default ResponKomplian