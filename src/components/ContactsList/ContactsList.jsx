import React from 'react'
import { Button, Item, List } from './ContactsList.styled'

export default function ContactsList({ contacts, onDelete }) {
    const elements = contacts.map(({ name, number, id }) => {
        return (
            <Item key={id}>{name}: {number} <Button onClick={() => onDelete(id)}>delete</Button></Item>
        )
    })
    return (
        <List>{elements}</List>
    )
}
