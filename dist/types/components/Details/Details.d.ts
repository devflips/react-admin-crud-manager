interface DetailsProps {
    data: Record<string, any> | null;
    config: {
        fields?: Array<Record<string, any>>;
        containerClass?: string;
        variant?: "default" | "card" | "split";
        styles?: {
            containerClass?: string;
            rowClass?: string;
            groupClass?: string;
            cardGroupClass?: string;
            labelClass?: string;
            valueClass?: string;
            iconClass?: string;
            mediaGridClass?: string;
        };
    };
    fetchRowDetails?: (payload: Record<string, any>) => Promise<{
        data: Record<string, any>;
    }>;
}
export default function Details({ data, config, fetchRowDetails, }: DetailsProps): import("react").JSX.Element;
export {};
