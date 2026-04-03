import Button from '../components/Button';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact">
      <div className="contact__container rounded-t-[50px] bg-white pt-20 text-black">
        <div className="mx-auto max-w-3xl px-6 py-8 text-left md:px-10 md:py-10 md:text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-black/45">
            {t('contact.title')}
          </p>
          <h2 className="primary-gradient primary-shadow mx-auto max-w-2xl text-[28px] font-semibold leading-tight md:text-[42px]">
            {t('contact.subtitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-black/60 md:text-base">
            {t('contact.note')}
          </p>

          <a
            href="mailto:karatitsynkiril@gmail.com?subject=Shopify%20project%20inquiry"
            className="mt-6 inline-flex items-center text-base font-medium text-black underline decoration-black/20 underline-offset-4 transition hover:text-black/70 md:text-lg"
          >
            {t('contact.email')}
          </a>

          <div className="mt-8 flex justify-start md:justify-center" data-aos="fade-up">
            <Button size="large" style="black">
              <span>{t('contact.book_call')}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
