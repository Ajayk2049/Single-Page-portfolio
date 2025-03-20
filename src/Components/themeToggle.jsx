import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { currTheme, ToggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button className="cursor-pointer rounded-full border p-1" onClick={ToggleTheme}>
        {" "}
        {currTheme === "light" ? (
          <Moon size={24} strokeWidth={1} />
        ) : (
          <Sun size={24} strokeWidth={1} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
