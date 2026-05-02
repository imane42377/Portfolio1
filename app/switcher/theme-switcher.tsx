import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../context/theme-context";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
     useEffect(() => {
    setMounted(true);
  }, []);
 if (!mounted) return null; 
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="icon"
      variant="default"
      className="w-8 h-8 text-ring shrink-0 cursor-pointer"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
}