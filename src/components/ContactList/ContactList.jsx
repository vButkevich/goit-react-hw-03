import css from "./Contactlist.module.css";

import ContactData from "../ContactData/ContactData";

const ContactList = ({ list, onDelete }) => {
  return (
    <>
      <ul className={css["contact-list"]}>
        {list.map((item) => {
          return (
            <li key={item.id} className={css["contact-item"]}>
              <ContactData data={item} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;
