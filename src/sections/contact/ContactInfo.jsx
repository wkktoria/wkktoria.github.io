import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleContactInfo from "./SingleContactInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleContactInfo
        text="wiktoria.peretiatkowicz.contact@gmail.com"
        Image={HiOutlineMail}
      />
      <SingleContactInfo text="+48 731 *** ***" Image={FiPhone} />
      <SingleContactInfo text="Poland" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
