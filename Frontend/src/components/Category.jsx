/* eslint-disable react/prop-types */
import React from 'react'

export default function Category({image, category}) {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className="w-52 h-52 border border-gray-500">
            <img className="w-52 h-52" src={image} alt="" />
        </div>
        <span className="font-bold">{category}</span>
    </div>
  )
}
