"use client"

import getImages from './data/images.json'
import { TopBar } from "./Components/TopBar"
import { ImageCard } from './Components/ImageCard'
import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import AddImages from './Components/AddImages'

const Home = () => {
  const [imageData, setImageData] = useState([...getImages])
  const [deletedId, setDeletedId] = useState([])



  // Images Delete Handler
  const handleDeleteImg = () => {

    [...deletedId].map((id) => {
      const findIndex = imageData.findIndex((data) => data.id === id)
      imageData.splice(findIndex, 1)
      setImageData([...imageData])
      setDeletedId([])
    })

  }


  return (
    <>
      <div className="container">
        <div className="gallery-wrapper mt-10 rounded-md">
          <div className="top-bar px-8 py-4 border-b border-b-gray-400">
            <TopBar
              deletedId={deletedId}
              setDeletedId={setDeletedId}
              handleDeleteImg={handleDeleteImg}
            />
          </div>
          <ReactSortable
            className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-5 p-8 gap-4"
            list={imageData}
            setList={setImageData}
            filter=".ignore-add-image-drag"
            ghostClass="sortable-ghost"
            dragClass='sortable-drag'
            touchStartThreshold={10}
            animation={400}
            delayOnTouchStart={true}
            delay={10}>


            {
              imageData.map((data) => {
                return (
                  <div key={data.id} className="first:row-span-2 first:row-start-1 first:col-start-1 first:col-end-3">
                    <ImageCard
                      id={data.id}
                      url={data.url}
                      deletedId={deletedId}
                      setDeletedId={setDeletedId}
                    />
                  </div>
                )
              })
            }
            <div className="h-full ignore-add-image-drag just">
              <AddImages />
            </div>
          </ReactSortable>
        </div>

      </div>
    </>
  )
}

export default Home

