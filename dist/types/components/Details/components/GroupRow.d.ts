interface GroupRowProps {
    col: Record<string, any>;
    data: Record<string, any>;
    uiVariant?: "default" | "card" | "split";
    styleConfig?: {
        rowClass?: string;
        groupClass?: string;
        labelClass?: string;
        valueClass?: string;
        iconClass?: string;
    };
}
declare const GroupRow: ({ col, data, uiVariant, styleConfig, }: GroupRowProps) => import("react/jsx-runtime").JSX.Element;
export default GroupRow;
