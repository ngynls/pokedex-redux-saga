import React, {Component} from "react";

class SearchBar extends Component{
    render(){
        return (
            <div className="search-filter-bar mt-4">
                <input className="form-control" type="search" placeholder="Search for a Pokemon" aria-label="Search" onChange={this.props.setSearchTerm}/>
            </div>
        );
    }
}
export default SearchBar;