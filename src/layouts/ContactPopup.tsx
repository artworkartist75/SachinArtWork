import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";

// import socialMedia from "../data/socialMedia";
import type { ArtistInfo } from "../types/home.data";
import { useTheme as useAppTheme } from "../ThemeContext";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  artist: ArtistInfo
};

function ContactPopup({open, setOpen, artist}: Props) {
  const { theme } = useAppTheme();
  const isDark = theme === "dark";
  
  return (
    <>
      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          
          {/* Popup Box */}
          <div className={`rounded-3xl p-8 w-full max-w-md relative border ${isDark ? "bg-[#111] border-gray-800" : "bg-white border-gray-300"}`}>
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className={`absolute top-5 right-5 text-2xl transition ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-800"}`}
            >
              <FaTimes />
            </button>

            {/* Heading */}
            <h2 className={`text-3xl font-bold text-center mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              Connect With Me
            </h2>

            <p className={`text-center mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Choose your favorite platform to contact me
            </p>

            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-5">
              
              {/* WhatsApp */}
              <a
                href={artist.whatsapplink}
                target="_blank"
                rel="noreferrer"
                className={`transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3 ${isDark ? "bg-[#1a1a1a] hover:bg-green-500" : "bg-gray-100 hover:bg-green-500"}`}
              >
                <FaWhatsapp className="text-4xl text-green-500" />
                <span className="font-semibold">WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href={artist.instalink}
                target="_blank"
                rel="noreferrer"
                className={`transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3 ${isDark ? "bg-[#1a1a1a] hover:bg-pink-500" : "bg-gray-100 hover:bg-pink-500"}`}
              >
                <FaInstagram className="text-4xl text-pink-500" />
                <span className="font-semibold">Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href={artist.facebooklink}
                target="_blank"
                rel="noreferrer"
                className={`transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3 ${isDark ? "bg-[#1a1a1a] hover:bg-blue-500" : "bg-gray-100 hover:bg-blue-500"}`}
              >
                <FaFacebook className="text-4xl text-blue-500" />
                <span className="font-semibold">Facebook</span>
              </a>

              {/* LinkedIn */}
              <a
                href={artist.linkedinlink}
                target="_blank"
                rel="noreferrer"
                className={`transition duration-300 rounded-2xl p-5 flex flex-col items-center gap-3 ${isDark ? "bg-[#1a1a1a] hover:bg-sky-500" : "bg-gray-100 hover:bg-sky-500"}`}
              >
                <FaLinkedin className="text-4xl text-sky-500" />
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