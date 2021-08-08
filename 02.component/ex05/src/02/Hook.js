import React, { Fragment, useRef, useState, useEffect } from 'react';

export default function Hook({ color }) {
    const [boxColor, setBoxColor] = useState(null);
    const [title, setTitle] = useState('');
    const h3Ref = useRef(null);

    /*
        Alternative 01 : getDerivedSteteFromProps
    */

    if (boxColor !== color) {
        setBoxColor(color);
    }

    /*
        2. After Rendering 함수( 상태에 변화 -> 렌더링 -> 함수)
        class component lifecycle(componentDidMount, dompoenentDidUpdate)
    */
    useEffect(() => {
        console.log('After Rendering');
    })

    /*
        3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수
        : 관심분리
    */
    useEffect(() => {
        console.log('update Color(DB) Using APIs...');
    }, [boxColor])

    /*
        4. Alternative 2 : componentDidMount & compoenntDidUpdate 
    */
    useEffect(() => {
        console.log('After Mount(componentDidMount)');
        return (function(){'After UnMount(componentWillUnMount)'})
    })

    console.log('-------->', boxColor, ':', color);

    return (
        <Fragment>
            <h3
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                }}
                ref={h3Ref}
            />
            <input 
                type='text' 
                value={ title } 
                onChange={ () => setTitle(e.target.value)}
                />    
        </Fragment>
    );
}
