import React from "react";
import SearchForm from "./SearchForm";

const ListingsContainer =({data})=>{
    return(
        <div>
        <SearchForm data={data} />
        </div>
    )
}
export default ListingsContainer