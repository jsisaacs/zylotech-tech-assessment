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
        //<img src={props.url} alt={props.name} />
        <Card>
            <CardImg top width="100%" src={props.url} />
            <CardBlock>
                <CardTitle>{props.name}</CardTitle>
                <Button 
                color="primary" 
                onClick={() => props.removeImage(props.name)}
                >
                    Remove
                </Button>
            </CardBlock>
        </ Card>
    );
}

export default Image;