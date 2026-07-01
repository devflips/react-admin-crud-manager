import { crudClasses, joinClasses } from "../../lib/crudClasses";

interface SpinnerProps {
  size?: string;
  className?: string;
  color?: string;
}

const Spinner = ({
  size = "lg",
  className = "",
  color = "border-primary-500",
}: SpinnerProps) => {
  const sizeClasses: Record<string, string> = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-4",
    lg: "w-8 h-8 border-4",
    xl: "w-12 h-12 border-8",
  };

  return (
    <div
      className={joinClasses(
        crudClasses.spinner.root,
        "rounded-full border-4 border-primary-500 border-t-gray-200 animate-spin",
        sizeClasses[size] || sizeClasses.lg,
        className,
      )}
      style={{
        borderTopColor: color,
      }}
    />
  );
};

export default Spinner;
