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
}
declare const Radio: ({ value, onChange, text, options, label, required, name, disabled, parentClass, }: RadioProps) => import("react/jsx-runtime").JSX.Element;
export default Radio;
