import React, { Fragment, useState, useEffect } from 'react';


export default function ImageList({ no, url, comment }) {
    console.log(url);
    return (
        <a style={{ backgroundImage:`url(${url})`,width:200,height:200,backgroundSize:200}} ></a>            
    )
}