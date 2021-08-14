import React, { Fragment, useState, useEffect } from 'react';
import styles from "./assets/css/gallery.css";
import Header from "./Header"
import ImageList from "./ImageList"


export default function GalleryApp() {
    const [images, setImages] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            console.log(response);

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setImages(json.data);
        } catch (err) {
            console.error(err);
        }
    }, []);



    return (
        <Fragment>
            <h1 className={styles.title}>갤러리</h1>
            <Header />
            <ImageList images={images} />
        </Fragment>
    )
}