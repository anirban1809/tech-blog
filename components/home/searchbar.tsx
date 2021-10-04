import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex mx-auto max-w-7xl my-5 items-center">
            <input className="text-2xl border-2 p-3" style={{flex:1}} width="100" type="text" placeholder="Search Here" />
        </div>
    )
}

export default SearchBar
