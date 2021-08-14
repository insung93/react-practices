import React, { Fragment, useState, useEffect } from 'react';
import Image from './Image';

export default function ImageList({images}) {
    console.log(images);
    return (
        <ul>
            {images.map(image => <Image key={ `image_no${image.no}` }
                                                no={ image.no }
                                                url={ image.url }
                                                comment={image.comment}/>) }
        </ul>
    )
}