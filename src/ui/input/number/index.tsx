"use client"

import React, { useState, useEffect } from "react";

type NumberInputType = {
    value: number;
    onChange: any;
}

const NumberInput = (p: NumberInputType) => {
    const [dataValue, setDataValue] = useState(1);

    const onDataChange = () => {
        if(!p.onChange) return;
        p.onChange(dataValue)
    }

    useEffect(onDataChange, [dataValue]);

    const adjustValue = () => {
        if(p.value === dataValue) return;
        setDataValue(p.value);
    }

    useEffect(() => {
        adjustValue();
    }, [p.value])

    const increment = () => {
        setDataValue(oldVal => oldVal + 1);
    }
    const decrement = () => {
        if(dataValue === 1) return;
        setDataValue(oldVal => oldVal - 1);
    }

    return (
            <div className={`number-input`}>
            <div
                className={`number-input_control ${dataValue === 1 ? "disabled" : ""}`}
                onClick={decrement}>
                -
            </div>
            <div className="number-input_field">{ dataValue }</div>
            <div className="number-input_control" onClick={increment}>+</div>
            </div>
    )
}

export default React.memo(NumberInput);