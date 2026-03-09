import { Editor } from "@tinymce/tinymce-react";
import InputLabel from "./InputLabel";

interface TinyEditorProps {
  editorKey: string;
  value: string;
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
  imageUploadHandler?: (blobInfo: any) => Promise<string>;
}

const TinyEditor = ({
  editorKey = "",
  value = "",
  onChange,
  label = "",
  required = false,
  placeholder = "",
  parentClass = "col-span-12",
  height = 400,
  inline = false,
  disabled = false,
  plugins,
  toolbar,
  menubar = false,
  fontFamily = "Inter, sans-serif",
  initConfig = {},
  imageUploadHandler,
}: TinyEditorProps) => {
  const defaultPlugins = [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "help",
    "wordcount",
  ];

  const defaultToolbar =
    "undo redo | blocks | bold italic underline forecolor backcolor | " +
    "alignleft aligncenter alignright alignjustify | " +
    "bullist numlist outdent indent | link image media table | " +
    "removeformat | code fullscreen preview";

  const handleImageUpload = (blobInfo: any) => {
    return new Promise<string>((resolve, reject) => {
      if (!imageUploadHandler) {
        resolve(`data:${blobInfo.blob().type};base64,${blobInfo.base64()}`);
        return;
      }

      imageUploadHandler(blobInfo)
        .then((url) => {
          if (!url) {
            reject("Upload failed: No URL returned");
          } else {
            resolve(url);
          }
        })
        .catch((error) => {
          reject(
            typeof error === "string"
              ? error
              : error?.message || "Image upload failed",
          );
        });
    });
  };

  return (
    <div className={parentClass}>
      {label && <InputLabel label={label} required={required} />}

      <Editor
        apiKey={editorKey}
        value={value}
        disabled={disabled}
        init={{
          height,
          inline,
          menubar,
          branding: false,
          statusbar: true,
          automatic_uploads: true,
          images_upload_handler: handleImageUpload,
          plugins: plugins ?? defaultPlugins,
          toolbar: toolbar ?? defaultToolbar,
          placeholder,
          content_style: `
            body {
                font-family: ${fontFamily};
            }
            `,
          ...initConfig,
        }}
        onEditorChange={(content) => {
          onChange?.(content);
        }}
      />
    </div>
  );
};

export default TinyEditor;
