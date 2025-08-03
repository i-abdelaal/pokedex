import clsx from "clsx";

type SpinnerProps = {
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-2",
  xl: "w-12 h-12 border-4",
};

export const Spinner = ({ size = "md" }: SpinnerProps) => {
  return <div className={clsx("inline-block bg-white rounded-full border-gray-300 border-t-blue-600 animate-spin", sizeClasses[size])} />;
};
