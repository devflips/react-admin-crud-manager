interface TableProps {
    config: Record<string, any>;
    setShowAdd: (value: boolean) => void;
    title: string;
    buttonText?: string;
    description?: string;
    showAddButton?: boolean;
}
declare const Table: ({ config, setShowAdd, title, buttonText, description, showAddButton, }: TableProps) => import("react/jsx-runtime").JSX.Element;
export default Table;
