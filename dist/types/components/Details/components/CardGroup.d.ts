interface CardGroupProps {
    col: Record<string, any>;
    data: Record<string, any>;
    uiVariant?: "default" | "card" | "split";
    styleConfig?: {
        rowClass?: string;
        cardGroupClass?: string;
        labelClass?: string;
        valueClass?: string;
        iconClass?: string;
    };
}
declare const CardGroup: ({ col, data, uiVariant, styleConfig, }: CardGroupProps) => import("react").JSX.Element;
export default CardGroup;
