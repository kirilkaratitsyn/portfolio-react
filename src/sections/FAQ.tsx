import Button from "../components/Button";

function FAQ() {
  const faqs = [
    {
      question: "What makes your websites special? 💻",
      answer: "I create websites that are fast, look great, and are easy for your customers to use. They work perfectly on phones, tablets, and computers. 🚀"
    },
    {
      question: "Why choose Shopify for my online store? 🛍️",
      answer: "Shopify is the safest and easiest way to run an online store. It has everything you need to start selling online quickly. 🔒"
    },
    {
      question: "Why work with me? 🌟",
      answer: "I create websites that not only look beautiful but also help your business grow. I'm here to support you every step of the way. ⚡"
    },
    {
      question: "How much? 💰",
      answer: "Each project is unique - let's discuss your specific needs and goals to find the right solution for your budget. 📊"
    },
    {
      question: "Support after launch? 🔄",
      answer: "Yes! I provide ongoing support to ensure your website stays up-to-date and performs at its best. 🛡️"
    },
    {
      question: "Who do you prefer, a Dog or a Cat? 🐱",
      answer: "Cats are my favorite! They're independent, graceful, and make perfect coding companions. 😺"
    }
  ];

  return (
    <section id="faq">
      <div className="faq__container" data-aos="fade-up">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">FAQ</h1>
        <div className="items md:grid grid-cols-2 gap-x-[50px]">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              className="item mb-[40px] max-w-[490px] px-[10px] py-[5px] border-white border-[1px] rounded-[4px]"
            >
              <p className="text-[20px] mb-[24px] font-semibold">{faq.question}</p>
              <span className="opacity-80">{faq.answer}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="large">
            <span>Book a Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;