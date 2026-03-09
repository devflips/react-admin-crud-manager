interface DetailsProps {
    data: Record<string, any> | null;
    config: {
        fields?: Array<Record<string, any>>;
        containerClass?: string;
    };
    fetchRowDetails?: (payload: Record<string, any>) => Promise<{
        data: Record<string, any>;
    }>;
}
export default function Details({ data, config, fetchRowDetails, }: DetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
