import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

function BookList(){
    return <ul>
        <li><Link to="/book-list/12"><Book ids='12'/></Link></li>
        <li><Link to="/book-list/23"><Book ids='23'/></Link></li>
        <li><Link to="/book-list/33"><Book ids='33'/></Link></li>
    </ul>
}
export default BookList;