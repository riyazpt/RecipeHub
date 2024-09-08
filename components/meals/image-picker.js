'use client'
import React, { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';


function ImagePicker({ label, name }) {
    const imageRef = useRef();
    const [pickedImage, setPickedImage] = useState()
    function handleOnclick() {

        imageRef.current.click()
    }
    function handleImageChange(e) {
        const file = e.target.files[0]
        if (!file) {
            setPickedImage(null);
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
    return (
        <div className={classes.picker}><label htmlFor="image">
            {label}
        </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked</p>}
                    {pickedImage && <Image src={pickedImage} alt="image picked" fill />}
                </div>
                <input className={classes.input} type="file" accept="image/png, image/jpeg" onChange={handleImageChange} ref={imageRef} name={name} id={name} required />
                <button className={classes.button} type="button" onClick={handleOnclick}>Pick an Image</button>
            </div>
        </div>
    )
}

export default ImagePicker