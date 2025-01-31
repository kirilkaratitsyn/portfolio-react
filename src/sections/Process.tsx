import Button from "../components/Button";

function Process() {
  const steps = [
    {
      title: "1. First Chat 🚀",
      description: "Let's discuss your business goals and website requirements. Planning the perfect solution - from simple websites to complete online stores. 🎯"
    },
    {
      title: "2. Research 🔍",
      description: "Analyzing industry best practices to ensure your website stands out and attracts the right customers. 📊"
    },
    {
      title: "3. Design 🎨",
      description: "Creating modern, attractive designs that look great on phones, tablets, and computers. 💫"
    },
    {
      title: "4. Building 💻",
      description: "Building your website using the best tools to make it fast, secure, and easy to update. ⚡"
    },
    {
      title: "5. Check & Test ✅",
      description: "Thorough testing ensures everything works perfectly, with adjustments made as needed. 🔄"
    },
    {
      title: "6. Go Live 🚀",
      description: "Your website goes live with ongoing support to ensure continued optimal performance. 🌟"
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
        <div className="flex justify-center items-center" data-aos="fade-up">
          <Button size="large">
            <span>Book a Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Process;