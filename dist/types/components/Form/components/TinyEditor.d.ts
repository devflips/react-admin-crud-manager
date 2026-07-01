interface TinyEditorProps {
    editorKey: string;
    value: string;
    name: string;
    onChange: (content: string) => void;
    label?: string;
    required?: boolean;
    placeholder?: string;
    parentClass?: string;
    height?: number;
    inline?: boolean;
    disabled?: boolean;
    plugins?: string[];
    toolbar?: string;
    menubar?: boolean;
    fontFamily?: string;
    initConfig?: Record<string, any>;
    errorMessage?: string;
    imageUploadHandler?: (blobInfo: any) => Promise<string>;
}
declare const TinyEditor: ({ editorKey, value, name, onChange, label, required, placeholder, parentClass, height, inline, disabled, plugins, toolbar, menubar, fontFamily, initConfig, imageUploadHandler, errorMessage, }: TinyEditorProps) => import("react").JSX.Element;
export default TinyEditor;
