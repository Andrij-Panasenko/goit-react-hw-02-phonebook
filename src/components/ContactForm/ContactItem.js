export const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(item => {
    return (
      <li key={item.id}>
        <p>{item.name}:</p>
        <p>{item.number}:</p>
        <button type="button" onClick={() => onDeleteContact(item.id)}>
          Delete
        </button>
      </li>
    );
  });
};
