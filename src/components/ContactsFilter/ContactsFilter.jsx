import React from 'react'

export default function ContactsFilter({ inputChange }) {
    return (
        <div>
            <input type="text" name='filter' onChange={inputChange} />
        </div>
    )
}
