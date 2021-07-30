import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    // const imageRef = useRef(null);

    const onKeyPressInput  = function(e) {
        if(e.key == 'Enter') {
            console.log(e.target.value);
        }
    }
    const onFocusInput  = function(e) {
        console.log('onFocus');
    }
    const onBlurInput  = function(e) {
        console.log('onBlur');
    }

    const onMouseOverImage  = function(e) {
        console.log('onMouseOver', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseMoveImage  = function(e) {
        console.log('onMouseMove', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseOutImage  = function(e) {
        console.log('onMouseOut', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseDownImage  = function(e) {
        console.log('onMouseDown', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onMouseUpImage  = function(e) {
        console.log('onMouseUp', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onClickImage  = function(e) {
        console.log('onClick', `x=${e.clientX}, y=${e.clientY}`);
    }
    const onDoubleClickImage  = function(e) {
        console.log('onDoubleClick', `x=${e.clientX}, y=${e.clientY}`);
    }

    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                // ref={ imageRef }
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}