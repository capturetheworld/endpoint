import React, { useState, useEffect } from 'react';
import { inputdata } from '../input/put.js';

const input = inputdata;
let submitText = "Send request";
let setType = inputdata.method;
let fields;

const Page = () => {

 //primary switch statement that creates a special field for GET.
    switch (inputdata.method) {
        case "GET":
            fields = [
                {
                    name: 'id',
                    type: 'text',
                }
            ];
            break;
        case "POST":
            fields = input.body;
            break;
        case "PUT":
            fields = inputdata.body;
            break;
        case "DELETE":
            fields = [];
            break;

    }

    return (
        <div>
            <h1>API Endpoint Explorer - <b>{input.title}</b></h1>
            <h4> Type: {input.method}</h4>
            <h5> Base URL: {input.url} </h5>
            <h2 key="title"> Body Parameters - Any relevant input fields will be displayed below:</h2>
            Required fields are marked with * .
            <hr key="title2"></hr>
            <br></br>
            <Form body={fields} />
            <br></br>
            <br></br>


        </div>
    )



}


const Form = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [storedValues, setState] = useState({});
    const [update, setUpdate] = useState(0);

    //updates everytime a user types something, storing the values in a hook
    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        //regex changes values back to integer
        if (/^\d+$/.test(value)) {
            value = parseInt(value);
        }

        if (storedValues[name] !== undefined && value === '') {
            delete storedValues[name];
        }
        else {
            setState({
                ...storedValues,
                [name]: value

            });

        }


    }

    //activates to do validation on form submit
    const handleClick = event => {
        let validation = true;
        let allfields = document.getElementsByClassName("input-field");
        for (let field of allfields) {
            if (!field.checkValidity()) {
                validation = false;
                alert("Some parameter requirements aren't met. \n\nThe " + field.name + " field must be a(n): " + field.type + "\n" +
                    (field.required ? "The field is required" : "(if you want this optional parameter)") + "\n" +
                    (field.pattern ? "It must match patter" + field.pattern : "") + "\n" +
                    (field.min ? "with minimum value of " + field.min : "") + "\n" +
                    (field.max ? "with a maximum value of " + field.max : "")

                );
            };
        }
        if (validation) {
            setIsShown(true);
            setUpdate(e => e + 1);
        } else {
            alert("Please make sure to fix all the errors! ")
        }



    };

    //handles clearing all fields
    const handleReset = event => {
        setIsShown(false);
        let allfields = document.getElementsByClassName("input-field");
        for (let field of allfields) {
            field.value = null;
        }
        setState({});
    };

    return (

        [<form> {props.body.map((field, index) => (
            [<h3 key={index + "header"}> {field.name} {field.required === true ? '*' : ''} </h3>,
            <input className="input-field" {...field} key={index} onChange={handleChange}></input>]
        ))} </form>,
        <hr key="title3"></hr>,
        <button key="Submit" onClick={handleClick}>{submitText}</button>,
        <button id="reseter" key="Reset" onClick={handleReset}>{'Reset'}</button>,
        <br key="break"></br>,
        <div key="display" id="outputbox">
            {isShown && <Output key={update} quickUpdate={update} userData={storedValues} />}
        </div>]
    )

}


const Output = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    let url = inputdata.url;
    let options = {};

    //builds the api request
    switch (inputdata.method) {
        case "GET":
            url += "?";
            if (props.userData === {}) {
                url = inputdata.url;
            }

            for (let attribute in props.userData) {
                url += attribute;
                url += ("=");
                url += props.userData[attribute];
            }
            options = {};
            break;
        case "POST":
            if (props.userData === {}) {
                break;
            }
            options = {
                method: 'POST',
                body: JSON.stringify(props.userData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }

            break;
        case "PUT":
            if (props.userData === {}) {
                break;
            }
            options = {
                method: 'PUT',
                body: JSON.stringify(props.userData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            break;
        case "DELETE":
            options = {
                method: 'DELETE',
            }
            break;

    }

    //makes the api request
    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading response...</div>;
    }
    else {
        return (
            <div><pre>{JSON.stringify(items, null, 2)}</pre></div>
        );
    }
};

export default Page;