import { crudClasses, joinClasses } from "../../lib/crudClasses";

const BADGE_COLORS: Record<string, { bg: string; border: string }> = {
  blue: {
    bg: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    border:
      "border border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-300",
  },
  teal: {
    bg: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    border:
      "border border-teal-300 text-teal-700 dark:border-teal-700 dark:text-teal-300",
  },
  purple: {
    bg: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    border:
      "border border-purple-300 text-purple-700 dark:border-purple-700 dark:text-purple-300",
  },
  yellow: {
    bg: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    border:
      "border border-yellow-300 text-yellow-700 dark:border-yellow-700 dark:text-yellow-300",
  },
  green: {
    bg: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    border:
      "border border-green-300 text-green-700 dark:border-green-700 dark:text-green-300",
  },
  red: {
    bg: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    border:
      "border border-red-300 text-red-700 dark:border-red-700 dark:text-red-300",
  },
  gray: {
    bg: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
    border:
      "border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300",
  },
};

const BADGE_VARIANTS: Record<string, string> = {
  contained: "bg",
  outline: "border !bg-transparent",
  soft: "bg opacity-90",
};

interface ChipProps {
  label: string;
  variant?: string;
  color?: string;
  className?: string;
}

const Chip = ({
  label,
  variant = "contained",
  color = "green",
  className = "",
}: ChipProps) => {
  const colorConfig = BADGE_COLORS[color] || BADGE_COLORS.green;
  const variantKey = BADGE_VARIANTS[variant] || BADGE_VARIANTS.contained;

  const variantClasses =
    variant === "outline" ? colorConfig.border : colorConfig.bg;

  return (
    <span
      className={joinClasses(
        crudClasses.chip.root,
        "inline-flex justify-center items-center rounded-sm text-xs font-semibold px-3 py-1 min-w-[78px]",
        variantClasses,
        variantKey,
        className,
      )}
    >
      {label}
    </span>
  );
};

export default Chip;
