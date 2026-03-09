import Select from "./Select";
import { Switch } from "./Switch";
import PhoneInput from "./PhoneInput";
import { TextArea } from "./TextArea";
import ImagePicker from "./ImagePicker";
import { Input } from "./Input";
import TinyEditor from "./TinyEditor";
import Checkbox from "./Checkbox";
import AudioPicker from "./AudioPicker";
import GroupRow from "../../Details/components/GroupRow";
import CardGroup from "../../Details/components/CardGroup";
import DetailRow from "../../Details/components/DetailRow";
import Radio from "./Radio";
import VideoPicker from "./VideoPicker";

export interface FieldConfig {
  key: string;
  label?: string;
  type?: string;
  options?: any[];
  placeholder?: string;
  rows?: number;
  inputClass?: string;
  search?: boolean;
  accept?: string;
  text?: string;
  required?: boolean;
  minLength?: number;
  dragDrop?: boolean;
  parentClass?: string;
  countriesList?: boolean;
  defaultCountry?: string;
  multiple?: boolean;
  dropdownMaxHeight?: number;
  editorKey?: string;
  fontFamily?: string;
  disabled?: boolean;
  negativeNumberAllow?: boolean;
  defaultValue?: any;
  renderCondition?: (formData: Record<string, any>) => boolean;
  pattern?: string;
  renderType?: string;
  cropImage?: boolean;
  aspectRatio?: number;
  dependencyKey?: string;
  mask?: string;
  maskApplyOnValue?: boolean;
  maxSize?: number;
  [key: string]: any;
}

interface RenderFieldsProps {
  field: FieldConfig;
  formData: Record<string, any>;
  handleChange: (key: string, value: any) => void;
}

const RenderFields = ({ field, formData, handleChange }: RenderFieldsProps) => {
  const {
    key,
    label,
    type,
    options,
    placeholder,
    rows,
    inputClass,
    search,
    accept,
    text,
    required = false,
    minLength,
    dragDrop,
    parentClass,
    countriesList,
    defaultCountry,
    multiple,
    dropdownMaxHeight,
    editorKey,
    fontFamily,
    disabled,
    negativeNumberAllow,
    defaultValue,
    renderCondition,
    pattern,
    renderType,
    cropImage,
    aspectRatio,
    dependencyKey,
    mask,
    maskApplyOnValue,
    maxSize,
  } = field;

  let value = formData?.[key];
  if (value === undefined || value === null) {
    value = "";
  }

  const finalPlaceholder =
    placeholder || (type === "select" ? `Select ${label}` : `Enter ${label}`);

  const baseClass =
    "w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200 bg-white text-black dark:bg-gray-700 dark:text-white";

  if (renderCondition && typeof renderCondition === "function") {
    const shouldRender = renderCondition(formData);
    if (!shouldRender) {
      return null;
    }
  }

  if (renderType && renderType == "details") {
    switch (type) {
      case "group":
        return <GroupRow col={field} data={formData} />;
      case "cardGroup":
        return <CardGroup col={field} data={formData} />;
      default:
        return <DetailRow col={field} data={formData} />;
    }
  }

  switch (type) {
    case "select":
      return (
        <Select
          options={options || []}
          value={value}
          formData={formData}
          dependencyKey={dependencyKey}
          onChange={(val) => handleChange(key, val)}
          placeholder={finalPlaceholder}
          className={inputClass || ""}
          search={search}
          required={required}
          defaultValue={defaultValue}
          label={label || ""}
          name={key}
          disabled={disabled}
          parentClass={parentClass || ""}
          multiple={multiple}
          dropdownMaxHeight={dropdownMaxHeight}
        />
      );

    case "checkbox":
      return (
        <Checkbox
          name={key}
          label={label || ""}
          options={options || []}
          value={value}
          onChange={(val) => handleChange(key, val)}
          required={required}
          parentClass={parentClass || ""}
          className={inputClass || ""}
          multiSelect={multiple}
          disabled={disabled}
        />
      );

    case "radio":
      return (
        <Radio
          value={value}
          onChange={(val) => handleChange(key, val)}
          text={text}
          options={options || []}
          label={label || ""}
          required={required}
          name={key}
          disabled={disabled}
          parentClass={parentClass || ""}
        />
      );

    case "switch":
      return (
        <Switch
          value={Boolean(value)}
          onChange={(val) => handleChange(key, val)}
          label={label || ""}
          required={required}
          name={key}
          disabled={disabled}
          className=""
          parentClass={parentClass || ""}
        />
      );
    case "phone":
      return (
        <PhoneInput
          value={value}
          onChange={(val) => handleChange(key, val)}
          countriesList={countriesList}
          defaultCountry={defaultCountry}
          required={required}
          placeholder={finalPlaceholder}
          search={search}
          label={label || ""}
          name={key}
          disabled={disabled}
          parentClass={parentClass || ""}
        />
      );

    case "textarea":
      return (
        <TextArea
          value={value}
          onChange={(e) => handleChange(key, e.target.value)}
          placeholder={finalPlaceholder}
          rows={rows || 3}
          className={`${baseClass} ${inputClass || ""}`}
          required={required}
          name={key}
          label={label || ""}
          disabled={disabled}
          parentClass={parentClass || ""}
        />
      );

    case "image":
      return (
        <ImagePicker
          value={value}
          onChange={(imgObj) => handleChange(key, imgObj)}
          required={required}
          accept={accept || "image/*"}
          aspect={aspectRatio}
          id={`file-${key}`}
          dragDrop={dragDrop}
          cropImage={cropImage}
          label={label || ""}
          name={key}
          parentClass={parentClass || ""}
        />
      );
    case "audio":
      return (
        <AudioPicker
          value={value}
          onChange={(audio) => handleChange(key, audio)}
          required={required}
          accept={accept || "audio/*"}
          id={`file-${key}`}
          dragDrop={dragDrop}
          label={label || ""}
          name={key}
          parentClass={parentClass || ""}
          maxSize={maxSize}
        />
      );
    case "video":
      return (
        <VideoPicker
          value={value}
          onChange={(video) => handleChange(key, video)}
          required={required}
          accept={accept || "video/*"}
          id={`file-${key}`}
          dragDrop={dragDrop}
          label={label || ""}
          name={key}
          maxSize={maxSize}
          parentClass={parentClass || ""}
        />
      );

    case "tinyEditor":
      return (
        <TinyEditor
          value={value}
          onChange={(newValue) => handleChange(key, newValue)}
          required={required}
          placeholder={finalPlaceholder}
          label={label || ""}
          parentClass={parentClass || ""}
          fontFamily={fontFamily}
          editorKey={editorKey || ""}
          disabled={disabled}
        />
      );

    default:
      return (
        <Input
          field={field}
          type={type || "text"}
          defaultValue={defaultValue}
          value={value}
          onChange={(updatedValue) => handleChange(key, updatedValue)}
          placeholder={finalPlaceholder}
          className={`${baseClass} ${inputClass || ""}`}
          required={required}
          name={key}
          minLength={minLength}
          label={label || ""}
          negativeNumberAllow={negativeNumberAllow}
          parentClass={parentClass || ""}
          disabled={disabled}
          pattern={pattern}
          mask={mask}
          maskApplyOnValue={maskApplyOnValue}
        />
      );
  }
};

export default RenderFields;
