function FAQ() {
  const faqs = [
    {
      question: "What if I need help with more than just Shopify? 🤔",
      answer: "We'll start with a focused discussion to understand your e-commerce goals and craft a strategy that aligns with your vision. 🎯"
    },
    {
      question: "What do you use to develop your websites? 💻",
      answer: "I use Figma for design and Visual Studio Code for development. The tool doesn't matter, results do. 🔧"
    },
    {
      question: "What makes your Shopify stores different? 🌟",
      answer: "High-performing, custom-tailored, and built to convert. 🚀"
    },
    {
      question: "What's your pricing like? 💰",
      answer: "Contact me for a personalized quote. 📞"
    },
    {
      question: "What about ongoing support? 🔄",
      answer: "I offer support and maintenance packages for continued success. 📈"
    },
    {
      question: "Who do you prefer, a Dog or a Cat? 🐱",
      answer: "Of course a Cat! 😺"
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
      </div>
    </section>
  );
}

export default FAQ;