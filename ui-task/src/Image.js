import React from 'react'
import { 
    Card,
    CardImg, 
    CardTitle, 
    CardBlock, 
    Button 
} from 'reactstrap';

function Image(props) {
    return (
        <Card>
            <CardImg top width="100%" src={props.url} />
            <CardBlock>
                <CardTitle>{props.name}</CardTitle>
                <Button
                    color="danger" 
                    onClick={() => props.removeImage(props.name)}
                >
                    Remove
                </Button>
            </CardBlock>
        </ Card>
    );
}

export default Image;