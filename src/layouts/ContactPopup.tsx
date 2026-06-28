import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

import socialMedia from "../data/socialMedia";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ContactPopup({open, setOpen}: Props) {
  

  return (
    <>
      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          
          {/* Popup Box */}
          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 w-full max-w-md relative">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl"
            >
              <FaTimes />
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center mb-3">
              Connect With Me
            </h2>

            <p className="text-gray-400 text-center mb-8">
              Choose your favorite platform to contact me
            </p>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-5">
              
              {/* WhatsApp */}
              <a
                href={socialMedia.whatsapplink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a1a] hover:bg-green-500 transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3"
              >
                <FaWhatsapp className="text-4xl" />
                <span className="font-semibold">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href={socialMedia.instalink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a1a] hover:bg-pink-500 transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3"
              >
                <FaInstagram className="text-4xl" />
                <span className="font-semibold">Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href={socialMedia.facebooklink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a1a] hover:bg-blue-500 transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3"
              >
                <FaFacebook className="text-4xl" />
                <span className="font-semibold">Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href={socialMedia.linkedinlink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1a1a1a] hover:bg-sky-500 transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3"
              >
                <FaLinkedin className="text-4xl" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactPopup;