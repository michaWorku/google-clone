import React, { useCallback, useState, KeyboardEvent, useEffect } from "react";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { FunctionDelegate } from "function-delegate";

interface SearchInputProps {
  onSearch(text: string): void;
  rootClassName?: string;
  getQueryDelegate?: FunctionDelegate<() => string>;
}

const SearchInput= ({
  onSearch,
  rootClassName,
  getQueryDelegate,
}: SearchInputProps) => {
  const router = useRouter();
  const [text, setText] = useState((router.query.q as string) ?? "");
  

  const onKeyup = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setText("");
    } else if (event.key === "Enter") {
      onSearch(event.currentTarget.value);
      event.currentTarget.blur();
    }
  }, []);

  useEffect(() => {
    if (getQueryDelegate) {
      getQueryDelegate.callback = () => {
        return text;
      };
    }
  }, [getQueryDelegate, text]);

  

  rootClassName = rootClassName || "w-full";

  return (
    <div className={rootClassName} onMouseUp={(e) => e.stopPropagation()}>
      <div
        className={`flex flex-col items-stretch hover:shadow-lg
      ${
        // showDropdown
        // ? "rounded-tl-lg rounded-tr-lg border border-transparent shadow-lg"
        // :
        "rounded-full border dark:border-yellow-400"
      }`}
      >
        <div className={`flex flex-row items-center w-full`}>
          <SearchIcon className="h-5 w-5 ml-4 text-gray-400" />
          <input
            onKeyUp={onKeyup}
            className="flex-1 p-3 text-sm text-black dark:text-white bg-transparent focus:outline-none"
            value={text}
            tabIndex={-1}
            onChange={(e) => {
              setText(e.target.value);
            }}
            // onFocus={(e) => setIsOpen(true)}
          />
          <MicrophoneIcon className="h-5 w-5 mr-4 text-blue-400" />
        </div>
      </div>
    </div>
  );
}

export default SearchInput