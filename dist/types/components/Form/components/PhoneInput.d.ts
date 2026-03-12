interface PhoneInputProps {
    label?: string;
    value: string;
    name: string;
    parentClass?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    search?: boolean;
    countriesList?: boolean;
    defaultCountry?: string;
    errorMessage?: string;
}
export default function PhoneInput({ label, value, name, parentClass, onChange, disabled, required, placeholder, search, countriesList, defaultCountry, errorMessage, }: PhoneInputProps): import("react/jsx-runtime").JSX.Element;
export {};
