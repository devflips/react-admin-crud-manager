declare module "react-text-editor-kit/react-editor/build/index.js" {
  import type { CSSProperties, JSX } from "react";

  export interface ReactTextEditorKitProps {
    value?: string;
    onChange?: (value: string) => void;
    getEditorRef?: (ref: unknown) => void;
    placeholder?: string;
    apiKey?: string;
    image_handler?: (payload: { image: File }) => Promise<string>;
    theme_config?: Record<string, string>;
    mainProps?: {
      className?: string;
      style?: CSSProperties;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  }

  const ReactEditor: (props: ReactTextEditorKitProps) => JSX.Element;
  export default ReactEditor;
}
