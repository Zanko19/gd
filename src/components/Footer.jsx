import { useState } from "react";
import "../styles/App.css";

function footer() {
  return (
    <>
      <footer
      className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left absolute bottom-0 w-full">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >TW Elements</a>
      </div>
    </footer>
    </>
  );
}

export default footer;