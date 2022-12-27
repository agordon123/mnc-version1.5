import React from "react";
import SearchForm from "./SearchForm";
import BasicTable from "../Listings/Table";
import App from "../../App";
const SearchContainer =({data})=>{
    return(
        <div>
        <BasicTable data={data} />
 
        </div>
    )
}
export default SearchContainer