import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

function BookList(){
    return <ul>
        <li><Link to="/book-list/1"><Book ids='1'/></Link></li>
        <li><Link to="/book-list/2"><Book ids='2'/></Link></li>
        <li><Link to="/book-list/3"><Book ids='3'/></Link></li>
        <li><Link to="/book-list/new"><Book /></Link></li>

    </ul>
}
export default BookList;