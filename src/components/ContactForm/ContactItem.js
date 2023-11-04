import { Button, Contact, NameWrapp } from "./ContactsItem.styled";

export const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(item => {
    return (
      <Contact key={item.id}>
       <NameWrapp>
         <p>{item.name}:</p>
         <p>{item.number}</p>
       </NameWrapp>
        <Button type="button" onClick={() => onDeleteContact(item.id)}>
          x
        </Button>
      </Contact>
    );
  });
};
