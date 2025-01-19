function Process() {
  const steps = [
    {
      title: "1. Kickoff 🚀",
      description: "We'll start with a focused discussion to understand your e-commerce goals and craft a strategy that aligns with your vision. 🎯"
    },
    {
      title: "2. Analysis 🔍",
      description: "I'll analyze your competitors to identify opportunities for your store to stand out and capture market share. 📊"
    },
    {
      title: "3. Design 🎨",
      description: "We'll collaboratively define the visual style, layout, and key features of your Shopify store to maximize conversions. 🛍️"
    },
    {
      title: "4. Development 💻",
      description: "I'll build your high-performing Shopify store, handling everything from functionality setup to product page optimization. ⚙️"
    },
    {
      title: "5. Review ✅",
      description: "I'll provide a thorough review and incorporate your feedback to ensure the final product meets your exact requirements. 🔄"
    },
    {
      title: "6. Launch 🚀",
      description: "Your optimized Shopify store is ready for launch! I'll guide you through the process and offer ongoing support for continued success. 🌟"
    }
  ];

  return (
    <section id="process">
      <div className="process__container">
        <h1 className="mb-8 text-[37px] font-bold primary-gradient primary-shadow">My Process</h1>
        <div className="items md:grid grid-cols-2 gap-x-[40px]">
          {steps.map((step, index) => (
            <div key={index} data-aos="fade-up" className="item mb-[79px] max-w-[490px]">
              <p className="text-[20px] font-semibold">{step.title}</p>
              <span className="opacity-80">{step.description}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button 
            data-aos="fade-up"
            className="light-shadow text-black bg-white px-12 py-3 rounded-full"
            data-cal-link="kiril-karatitsyn/free-consultation-call"
            data-cal-namespace="free-consultation-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}

export default Process;