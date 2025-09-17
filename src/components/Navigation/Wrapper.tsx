import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type WrapperProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

const Wrapper = ({
  children,
  className = "",
  fullWidth = false,
}: WrapperProps) => {
  return (
    <div
      className={cn(
        fullWidth
          ? "w-full px-6 sm:px-8 lg:px-10"
          : "container mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
