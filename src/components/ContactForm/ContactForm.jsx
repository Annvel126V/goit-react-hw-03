import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

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
    <form className={s.form} onSubmit={handleSubmit}>
      <p className={s.title}>Name</p>
      <input className={s.input} type="text" name="name" />
      <p className={s.title}>Number</p>
      <input className={s.input} type="text" name="number" />
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
