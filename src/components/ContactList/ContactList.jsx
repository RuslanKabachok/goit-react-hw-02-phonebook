import ContactList from './ContactList.styled';
import ContactListItem from 'components/ContactItem/ContactItem.styled';

const Contacts = ({ contacts }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>{contact.name}</ContactListItem>
      ))}
    </ContactList>
  );
};

export default Contacts;
