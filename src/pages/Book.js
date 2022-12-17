import React from "react";
import { useParams } from "react-router-dom";


function Book(props){
    const {id} = useParams();
    return <div>Book {id} {props.ids}</div>
}

export default Book;