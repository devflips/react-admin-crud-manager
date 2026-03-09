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
}
declare const SortDropdown: ({ options, value, onChange, clearLabel, }: SortDropdownProps) => import("react/jsx-runtime").JSX.Element | null;
export default SortDropdown;
