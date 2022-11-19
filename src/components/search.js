import React, { useState, useEffect } from 'react';
import {inputdata} from '../input/createuser.js';

const input = inputdata;
 
const Page = () => {
    // const [greeting, setGreeting] = useState(
    //     'Hello Function Component!'
    // );
  


    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // // Note: the empty deps array [] means
    // // this useEffect will run once
    // // similar to componentDidMount()
    // useEffect(() => {
    //     fetch("https://api.example.com/items")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     return (
    //         <ul>
    //             {items.map(item => (
    //                 <li key={item.id}>
    //                     {item.name} {item.price}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    console.log(input);

    return(
        <div> 
            <h1>{input.title}</h1>
            {input.method}
            <br></br>
            {input.url}
            {/* {input.body} */}

        </div>
    )


 
}



const Headline = ({ headline, onChangeHeadline }) => (
    <div>
        <h1>{headline}</h1>

        <input type="text" value={headline} onChange={onChangeHeadline} />
    </div>
);

export default Page;