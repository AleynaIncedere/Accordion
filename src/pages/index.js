
import Accordion from '../components/Accordion'; 
import styles from './index.module.css'; 

const faqs = [
  { title: 'Ürün kaliteli mi?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tortor quis libero elementum molestie. Fusce eget lacinia urna, facilisis maximus arcu. Pellentesque ut ante egestas ipsum laoreet tempor.  ' },
  { title: 'Fiyatı ne kadar?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tortor quis libero elementum molestie. Fusce eget lacinia urna, facilisis maximus arcu. Pellentesque ut ante egestas ipsum laoreet tempor.  ' },
  { title: 'Ne zaman ulaşır?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat tortor quis libero elementum molestie. Fusce eget lacinia urna, facilisis maximus arcu. Pellentesque ut ante egestas ipsum laoreet tempor.  ' },
];

export default function Home() {
  return (
    <>
    <header className={styles.globalHeader}>
        <h1 className={styles.pageTitle}>Project 2 : SSS / Accordion</h1>
      </header>
    <div className={styles.container}>
        
      <h1 className={styles.title}>Sıkça Sorulan Sorular</h1>
     
      <div className={styles.accordionContainer}>
        
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
     
    </div>
    </>
  );
}
