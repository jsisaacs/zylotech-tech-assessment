import React from 'react'
import { Card, CardImg, CardTitle } from 'reactstrap'

function Image(props) {
    return (
        //<img src={props.url} alt={props.name} />
        <Card>
            <CardImg src={props.url} />
            <CardTitle>{props.name}</CardTitle>
        </ Card>
    );
}

export default Image;