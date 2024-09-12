import s from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.data}>
      <p className={s.info}>
        {name} {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
