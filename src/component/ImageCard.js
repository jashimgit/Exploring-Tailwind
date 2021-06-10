import React from 'react';

export default function ImageCard({image}) {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overlfow-hidden shadow-lg mb-5"> 
            <img src={image.webformatURL} className="w-full h-48" alt={image.type} />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by someone
                </div>
                <ul>
                    <li>
                        <strong>views: </strong> 
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>like: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                
                {
                    tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2">
                        #{tag}
                        </span>
                    )) 
                }
                
            </div>
        </div>
    )
}
