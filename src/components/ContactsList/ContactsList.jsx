import React from 'react'

export default function ContactsList({ contacts }) {
    const elements = contacts.map(({ name, number, id }) => {
        return (
            <li key={id}>{name}: {number}</li>
        )
    })
    return (
        <ul>{elements}</ul>
    )
}
