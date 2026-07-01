import type { ReactNode } from "react";
interface SortOption {
    value: string;
    label: string;
    [key: string]: any;
}
interface SortDropdownProps {
    options: SortOption[];
    value: string;
    onChange: (value: string, option: SortOption | null) => void;
    clearLabel?: string;
    label?: string;
    icon?: ReactNode | null;
}
declare const SortDropdown: ({ options, value, onChange, clearLabel, label, icon, }: SortDropdownProps) => import("react").JSX.Element | null;
export default SortDropdown;
