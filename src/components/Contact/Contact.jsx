const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div>
      <p>
        {name} {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
