import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.data}>
      <ul>
        <li className={s.info}>
          <div>
            <FaUser />
          </div>
          {name}
        </li>
        <li className={s.info}>
          <div>
            <BsFillTelephoneFill />
          </div>
          {number}
        </li>
      </ul>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
