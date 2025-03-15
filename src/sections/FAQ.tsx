import Button from "../components/Button";
import { useTranslation } from 'react-i18next';

function FAQ() {
  const { t } = useTranslation();
  const faqs = t('faq.questions', { returnObjects: true }) as Array<{ question: string, answer: string }>;

  return (
    <section id="faq">
      <div className="faq__container" data-aos="fade-up">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">
          {t('faq.title')}
        </h1>
        <div className="items md:grid grid-cols-2 gap-x-[50px]">
          {faqs.map((faq: { question: string, answer: string }, index: number) => (
            <div 
              key={index}
              data-aos="fade-up" 
              className="item mb-[40px] max-w-[490px] px-[10px] py-[5px] "
            >
              <p className="text-[20px] mb-[24px] font-semibold">{faq.question}</p>
              <span className="opacity-80">{faq.answer}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="large">
            <span>{t('faq.book_call')}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;