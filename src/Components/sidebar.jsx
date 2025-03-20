import {
  BookA,
  GalleryHorizontalEnd,
  Handshake,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeToggle from "./themeToggle.jsx";
const Sidebar = () => {
  return (
    <motion.div initial={{ x: -100, opacity: 0 }} // Start position (off-screen)
    animate={{ x: 0, opacity: 1 }} // End position (normal)
    transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
    className="flex flex-col items-center h-screen w-[60px] border rounded ml-1 p-2 relative">
      {/* Theme Toggle */}
      <div className=" mt-5 flex items-center justify-center">
        <ThemeToggle />
      </div>
      {/* Top Icons */}
      <div className="flex flex-col gap-8 mt-5">
        <SidebarItems icon={BookA} label="About Me" />
        <SidebarItems icon={GalleryHorizontalEnd} label="Projects" />
        <SidebarItems icon={Handshake} label="Contact Me" />
      </div>
      {/* Bottom Icons */}
      <div className="mt-33 flex flex-col gap-8">
      <SidebarItems icon={Github} label="Github Repo" />
      <SidebarItems icon={Linkedin} label="LinkedIN Profile" />
      <SidebarItems icon={Instagram} label="Instagram Page" />
      </div>
    </motion.div>
  );
};
const SidebarItems = ({icon:Icon, label})=>{
  return(
    <div className="relative group">
      <Link className="flex items-center justify-center p-1 ">
      <Icon size={24} strokeWidth={1} />
      <span className="absolute whitespace-nowrap rounded-lg ml-4 left-full text-sm border px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:transition-all translate-x-3 duration-500 pointer-events-none">{label}</span>
      </Link>
    </div>
  )
}
export default Sidebar;
