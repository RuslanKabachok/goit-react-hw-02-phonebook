import ContactList from './ContactList.styled';
import ContactListItem from 'components/ContactItem/ContactItem.styled';

const Contacts = ({ contacts }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
        </ContactListItem>
      ))}
    </ContactList>
  );
};

export default Contacts;
