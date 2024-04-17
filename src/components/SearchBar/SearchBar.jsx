import React from 'react'

export default function SearchBar() {
    return (
        <form className='filter-from'>
            <input type="text" className="search" placeholder='Поиск' />
            <label>
                <input type="checkbox" className="in-wish-list-checkbox" />
            </label>
        </form>
    )
}
