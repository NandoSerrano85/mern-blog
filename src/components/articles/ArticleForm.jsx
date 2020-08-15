import React, { useState }from 'react'
import { Form, Button } from 'react-bootstrap';

const ArticleForm = () => {
    const initialState = {title:"", text:""};
    const [ values, setValues ] = useState(initialState);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("/artcles", {
            method: 'POST',
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(values)
        })
        .then((res) => {
            if(res.ok){
                alert("Blog posted");
                setValues(initialState);
                // return res.json().then((article) => {
                //     history.push(`articles/${article._id}`);
                // });
            }
        })
        .catch((error) => {
            alert(error);
            console.log(error);
        })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Title of article" 
                    onChange={e => setValues({...values, title: e.target.value })}
                    required={true} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Blog</Form.Label>
                <Form.Control 
                    as="textarea" 
                    placeholder="Article body" 
                    rows="5"
                    onChange={e => setValues({...values, text: e.target.value })}
                    required={true} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ArticleForm
