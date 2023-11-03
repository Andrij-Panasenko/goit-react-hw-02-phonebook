import { ContactItem } from './ContactItem';

export const ContactForm = ({
  contacts,
  onContactFilter,
  filter,
  onDeleteContact,
}) => {
  const filteredContacts = contacts.filter(item => {
    const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());
    
    return hasContact;
  });
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find contact by name</p>
      <input
        type="text"
        placeholder="Name"
        value={filter}
        onChange={evt => onContactFilter(evt.target.value)}
      />

      <ul>
        {filteredContacts.length > 0 && (
          <ContactItem
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        )}
      </ul>
    </div>
  );
};
