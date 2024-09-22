import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
