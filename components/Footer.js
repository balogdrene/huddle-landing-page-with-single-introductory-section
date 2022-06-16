import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-5 lg:justify-end">
      <div className="flex gap-5">
        <span className="p-2 text-white duration-150 border-2 border-white rounded-full cursor-pointer hover:text-softMagenta hover:border-softMagenta">
          <FaFacebookF />
        </span>
        <span className="p-2 text-white duration-150 border-2 border-white rounded-full cursor-pointer hover:text-softMagenta hover:border-softMagenta">
          <FaTwitter />
        </span>
        <span className="p-2 text-white duration-150 border-2 border-white rounded-full cursor-pointer hover:text-softMagenta hover:border-softMagenta">
          <FaInstagram />
        </span>
      </div>
    </footer>
  )
}
