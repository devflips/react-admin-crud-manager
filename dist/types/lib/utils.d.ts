export declare const formatDate: (dateString: string | Date | null | undefined, format?: string) => string;
export declare const searchLocalData: <T extends Record<string, any>>(data: T[], searchTerm: string | undefined | null, searchKeys?: string[]) => T[];
