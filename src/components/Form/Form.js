import { Forma,Input,Label,Button } from './Form.styled'
import { useState } from 'react'
import { addNewContacts } from 'redux/Operation/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/Operation/operations';

export default function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const items = useSelector(addNewContacts);

    const inputAddedName = evt => {
        const { name, value } = evt.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        }
    };

    const onSubmitForm = evt => {
        evt.preventDefault();
        const newContact = {name: name,number: number};
            if (items.length === 0) {
                dispatch(addContacts(newContact));
                resetForm();
        return;
        } else {
        const existingContacts = 
        items.findIndex(itemContacts =>
            newContact.name === itemContacts.name) !==-1;
        if(existingContacts){
        alert(`${newContact.name} is already in contacts.`)
        return;
        }
            dispatch(addContacts(newContact));
            resetForm();
        }
    };

    const resetForm = () => {
        setName('');setNumber('');
    };

    return (
   
            <Forma onSubmit={onSubmitForm}>
                <Label>Name</Label>
                <Input
                    autoComplete="off"
                    type="text"
                    placeholder="First Name Last Name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="May contain only letters"
                    value={name}
                    onChange={inputAddedName}
                    required 
                    />
                <br />
                <Label>Number</Label>
                <Input
                    autoComplete="off"
                    placeholder="111-11-11"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="May contain only number"
                    value={number}
                    onChange={inputAddedName}
                    required />

                <br />
                <Button type="submit">Add Contact</Button>
            </Forma>
     
    );
}
