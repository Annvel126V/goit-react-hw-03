import { nanoid } from "nanoid";

// const nameId = nanoid();
// const phoneId = nanoid();

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Name</p>
      <input type="text" name="name" />
      <p>Number</p>
      <input type="text" name="number" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
