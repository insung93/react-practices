import React, { Fragment, useRef, useState, useEffect } from "react";

export default function Hoos({ color }) {
    const [boxColor,]
    const h3Ref = useRef(null);

    return (
        <h3
            style={{
                width: 300,
                height: 50,
                backgroundColor: color
            }}
            ref={ h3Ref }
        />
    )
}
