"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export const ImageCard = ({
    id,
    url,
    deletedId,
    setDeletedId
}) => {

    const [checked, setChecked] = useState(false)

    useEffect(() => {

        if (deletedId.length <= 0) {
            setChecked(false)
        }

    }, [checked, deletedId])


    // Images Selecting Handler ----------------
    const handleChecked = (e) => {
        setChecked(e.target.checked)

        if (e.target.checked) {
            setDeletedId((prevId) => [...prevId, id])
        } else {
            const filterId = deletedId.filter((idNum) => idNum !== id)
            setDeletedId([...filterId])
        }
    }

    return (
        <>
            <div className="w-full h-full relative overflow-hidden group hover:cursor-pointer">
                <Image
                    src={url}
                    alt="card-image"
                    width={400}
                    height={400}
                    className="max-w-full h-full w-full border border-gray-300 shadow rounded-xl" />

                <div className="absolute top-3 left-3 z-30">
                    <input type="checkbox" checked={checked} value={checked} className={`w-5 h-5 group-hover:opacity-100 duration-300 ${checked ? 'opacity-100' : 'opacity-0'}`} onChange={handleChecked} />
                </div>
                <div className={`inset-0 bg-black/40 absolute rounded-xl p-4 z-10  duration-300 group-hover:opacity-100 ${checked ? 'opacity-30' : 'opacity-0'}`}>
                </div>
            </div>
        </>
    )
}
