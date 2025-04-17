import React from "react";
import ContactForm from "../../components/ContactForm";

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
        <p className="text-white">
          I'd love to hear from you! Whether you're interested in collaborating
          on a project, have a question about my work, or just want to say
          hello, I'm always happy to connect.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactLeft;
