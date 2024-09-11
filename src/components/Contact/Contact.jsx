const Contact = ({ data: { id, name }, onDelete }) => {
  return (
    <div>
      <p>{name} </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
