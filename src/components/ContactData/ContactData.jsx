import css from "./ContactData.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
const ContactData = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.id}>
          <span className={css.icon}>
            <FaAddressCard />
          </span>
          {id}
        </p>
        <p className={css.text}>
          <span className={css.icon}>
            <FaUser />
          </span>
          {name}
        </p>
        <p className={css.text}>
          <span className={css.icon}>
            <FaPhoneAlt />
          </span>
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default ContactData;
