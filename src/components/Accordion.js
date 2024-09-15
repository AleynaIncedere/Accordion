import { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionTitle} ${isOpen ? styles.active : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <span className={styles.icon}></span>
      </button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.show : ''}`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
