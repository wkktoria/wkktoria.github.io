import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://github.com/wkktoria" Icon={FiGithub} />
      <SingleContactSocial
        link="https://linkedin.com/in/wiktoria-peretiatkowicz"
        Icon={FaLinkedin}
      />
    </div>
  );
};

export default ContactSocial;
