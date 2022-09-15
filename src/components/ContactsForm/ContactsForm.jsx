import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class ContactsForm extends Component {
    state = {
        name: '',
        number: ''
    }

    contactNameInpuId = nanoid();
    contactNumberInputId = nanoid();

    handleChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({ [name]: value })
    };

    handleSubmit = (e) => {
        const { name, number } = this.state
        e.preventDefault();
        this.props.onSubmit({ name, number })
        this.setState({
            name: '',
            number: ''
        })
    }

    render() {
        const { handleSubmit, handleChange, contactNameInpuId, contactNumberInputId } = this
        const { name, number } = this.state
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor={contactNameInpuId}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id={contactNameInpuId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor={contactNumberInputId}>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        id={contactNumberInputId}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                    />
                </label>
                <button>add</button>
            </form>
        )
    }
}
