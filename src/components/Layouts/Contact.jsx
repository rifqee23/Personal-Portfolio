import ContactForm from "../Fragments/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="mt-10">
      <div className="max-w-6xl mx-auto p-4 mb-10  ">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          About Me
        </p>
      </div>
      <div className="flex lg:flex-row-reverse flex-col">
        <div className="lg:w-1/2 flex justify-center">
          <div>
            <img src="/images/callme.jpg" alt="" width={500} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
