import React from "react";
export interface TabOption {
    value: string | number | boolean;
    label: string;
    count?: number;
    className?: string;
}
interface TabsProps {
    options: TabOption[];
    value: string | number | boolean;
    onChange: (option: TabOption) => void;
    className?: string;
}
declare const Tabs: ({ options, value, onChange, className }: TabsProps) => React.JSX.Element | null;
export default Tabs;
