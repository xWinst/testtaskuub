import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContactForm, ContactView, Icon } from 'components';
import {
  updateContact,
  removeContact,
  addContact,
  removeAllContacts,
} from 'redux/contactReducer';

const ContactList = () => {
  const [editIdx, setEditIdx] = useState(null);
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const createContact = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} вже внесений до списку контактів`);
    } else {
      dispatch(addContact(contact));
    }
  };

  const editContact = contact => {
    if (contacts.find(({ name }) => name === contact.name)) {
      alert(`${contact.name} вже існує у списку контактів`);
    } else {
      dispatch(updateContact(contact));
      setEditIdx(null);
    }
  };

  const deleteContact = index => {
    dispatch(removeContact(index));
  };

  const deleteAll = () => {
    dispatch(removeAllContacts());
  };

  const cancel = () => {
    setEditIdx(null);
  };

  return (
    <>
      <ContactForm
        onSubmit={createContact}
        submitButton={
          <>
            <button className="btn btn-success" type="submit">
              Додати контакт
            </button>
            <button
              className="btn btn-primary ml-2"
              type="button"
              onClick={deleteAll}
            >
              Видалити всe
            </button>
          </>
        }
      />
      <ul className="h6 mt-2 px-4 py-3 bg-gradient rounded-lg shadow">
        {contacts.map(({ name, number }, index) => (
          <li key={name} className="d-flex mt-2">
            {editIdx === index ? (
              <ContactForm
                onSubmit={editContact}
                submitButton={
                  <>
                    <button className="btn-icon mr-2" type="submit">
                      <Icon icon="ok" w={20} />
                    </button>
                    <Icon cn="pointer" icon="cancel" w={20} onClick={cancel} />
                  </>
                }
                initialState={{ index, name, number }}
              />
            ) : (
              <ContactView
                name={name}
                number={number}
                onEdit={() => setEditIdx(index)}
                onDelete={() => deleteContact(index)}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
