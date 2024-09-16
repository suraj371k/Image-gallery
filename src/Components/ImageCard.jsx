import React from 'react'

function ImageCard( {image} ) {
  return (
    <div>
         <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL}
       className="w-full" />
       <div className="px-6 py-4">
         <div className="font-bold text-purple-600 text-xl mb-2">
          Photo by {image.user}
         </div>
         <ul>
          <li>
            <strong>Views:</strong> {image.views}
          </li>
          <li>
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong> {image.likes}
          </li>
         </ul>
       </div>
    </div>
    </div>
  )
}

export default ImageCard