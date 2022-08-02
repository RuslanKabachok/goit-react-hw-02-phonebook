import ContactList from './ContactList.styled';
import ContactListItem from 'components/ContactItem/ContactItem.styled';
import { Button } from 'components/Button/Button.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </ContactListItem>
      ))}
    </ContactList>
  );
};

export default Contacts;
