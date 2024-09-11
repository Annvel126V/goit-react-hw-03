import { nanoid } from "nanoid";

// const nameId = nanoid();
// const phoneId = nanoid();

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      text: e.target.elements.name.value,
    });
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
