import { ContactItem } from './ContactItem';
import {
  Input,
  Label,
  Notify,
  Title,
} from './ContactsForm.styled';

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
      <Title>Contacts</Title>
      <Label>
        Find contact by name:
        <Input
          type="text"
          placeholder="Name"
          value={filter}
          onChange={evt => onContactFilter(evt.target.value)}
        />
      </Label>

      <ul>
        {filteredContacts.length > 0 ? (
          <ContactItem
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        ) : (
          <Notify>Your contatcs is empty. Please add contact to your list</Notify>
        )}
      </ul>
    </div>
  );
};
