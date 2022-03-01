import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type ThemeBrightness = "dark" | "light";

const ThemeProvider = createContext<{
  setBrightness(brightness: ThemeBrightness): void;
  brightness: ThemeBrightness;
}>(null);

const iconClasses =
  "transform h-5 w-5 shadow-md dark:text-gray-200 text-yellow-400 rounded-full bg-gray-100 dark:bg-gray-600 z-10";

export function ThemeToggle() {
  const themeProvider = useContext(ThemeProvider);

  const containerRef = useRef<HTMLDivElement>();
  const iconRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!(containerRef.current.offsetWidth && iconRef.current.offsetWidth)) {
      return;
    }

    if (themeProvider.brightness === "dark") {
      iconRef.current.style.transform = `translateX(${
        containerRef.current.offsetWidth - iconRef.current.offsetWidth + 4
      }px)`;
    } else {
      iconRef.current.style.transform = `translateX(-4px)`;
    }
  }, [themeProvider.brightness]);

  useEffect(() => {
    setTimeout(() => iconRef.current.classList.add("transition-transform"), 0);
  });

  return (
    <div
      className="flex flex-row items-center rounded-full border dark:bg-blue-200 h-3 w-8 cursor-pointer"
      onClick={() => {
        themeProvider.setBrightness(
          themeProvider.brightness === "dark" ? "light" : "dark"
        );
      }}
      ref={containerRef}
    >
      <div className={`duration-500 ease-in-out`} ref={iconRef}>
        {themeProvider.brightness === "dark" ? (
          <MoonIcon className={`${iconClasses}`} />
        ) : (
          <SunIcon className={`${iconClasses}`} />
        )}
      </div>
    </div>
  );
}

export function Theme({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [brightness, setBrightness] = useState<ThemeBrightness>("dark");

  const value = useMemo(() => {
    return {
      brightness,
      setBrightness,
    };
  }, [brightness]);

  return (
    <div className={`${brightness}`}>
      <ThemeProvider.Provider value={value}>{children}</ThemeProvider.Provider>
    </div>
  );
}
