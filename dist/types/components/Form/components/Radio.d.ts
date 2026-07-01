interface RadioOption {
    label: string;
    value: any;
}
interface RadioProps {
    value: any;
    onChange: (value: any) => void;
    text?: string;
    options: RadioOption[];
    label?: string;
    required?: boolean;
    name: string;
    disabled?: boolean;
    parentClass?: string;
    errorMessage?: string;
}
declare const Radio: ({ value, onChange, text, options, label, required, name, disabled, parentClass, errorMessage, }: RadioProps) => import("react").JSX.Element;
export default Radio;
