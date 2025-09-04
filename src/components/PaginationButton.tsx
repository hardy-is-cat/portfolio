"use client";

import { twMerge } from "tailwind-merge";

interface PaginationButtonTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 1 | -1;
}

function PaginationButton({
  direction,
  onClick,
  className,
}: PaginationButtonTypes) {
  return (
    <>
      {direction === 1 ? (
        <button
          className={twMerge(
            "z-11 hover:bg-foreground/70 bg-foreground/40 mr-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow transition-all active:scale-90",
            className
          )}
          onClick={onClick}
        >
          <span className="a11y-hidden">다음</span>
          <span className="border-background mr-1.5 block h-4 w-4 rotate-45 border-r-2 border-t-2" />
        </button>
      ) : (
        <button
          className={twMerge(
            "z-11 hover:bg-foreground/70 bg-foreground/40 ml-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow transition-all active:scale-90",
            className
          )}
          onClick={onClick}
        >
          <span className="a11y-hidden">이전</span>
          <span className="border-background ml-1.5 block h-4 w-4 -rotate-45 border-l-2 border-t-2" />
        </button>
      )}
    </>
  );
}

export default PaginationButton;
