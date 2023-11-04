import { ContactItem } from './ContactItem';
import {
  ContactList,
  Input,
  Label,
  Section,
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
    <Section>
      <Title>Contacts</Title>
      <Label>
        Find contact by name
        <Input
          type="text"
          placeholder="Name"
          value={filter}
          onChange={evt => onContactFilter(evt.target.value)}
        />
      </Label>

      <ContactList>
        {filteredContacts.length > 0 ? (
          <ContactItem
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        ) : (
          <p>Your contatcs is empty. Please add contact to your list</p>
        )}
      </ContactList>
    </Section>
  );
};
