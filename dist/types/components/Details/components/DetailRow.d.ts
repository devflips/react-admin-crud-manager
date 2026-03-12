interface DetailRowProps {
    col: Record<string, any>;
    data: Record<string, any>;
    uiVariant?: "default" | "card" | "split";
    styleConfig?: {
        rowClass?: string;
        labelClass?: string;
        valueClass?: string;
        iconClass?: string;
        mediaGridClass?: string;
    };
}
declare const DetailRow: ({ col, data, uiVariant, styleConfig, }: DetailRowProps) => import("react/jsx-runtime").JSX.Element;
export default DetailRow;
