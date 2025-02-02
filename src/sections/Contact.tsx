import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact">
      <div className="contact__container text-center flex justify-center items-center flex-col bg-white text-black pt-20 rounded-t-[50px]" >
        <h3 className="md:text-[24px] text-lg md:mb-[20px] mb-5 font-[200] black-gradient" >
        {t('contact.subtitle')}
        </h3>
       
        <a 
          href="mailto:karatitsynkiril@gmail.com?subject=Hi Kiril!" 
          className="font-medium md:text-[64px] text-2xl primary-gradient primary-shadow md:mb-[34px] mb-10 py-5"
        >
          {t('contact.email')}
        </a>
       
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="extraLarge" style="black">
            <span>{t('contact.book_call')}</span>
            
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Contact;