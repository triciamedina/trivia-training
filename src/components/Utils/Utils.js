import React from 'react';

export function Button(props) {
    return <button className={props.className} {...props}>{props.children}</button>
};