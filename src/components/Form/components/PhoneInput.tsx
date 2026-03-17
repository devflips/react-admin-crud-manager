import React, { useState, useEffect, useRef } from "react";
import { countries, CountryInterface } from "../../../data/countries";
import { ChevronDown, Search } from "lucide-react";
import { createPortal } from "react-dom";
import InputLabel from "./InputLabel";
import { crudClasses, joinClasses } from "../../../lib/crudClasses";

interface PhoneInputProps {
  label?: string;
  value: string;
  name: string;
  parentClass?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  search?: boolean;
  countriesList?: boolean;
  defaultCountry?: string;
  errorMessage?: string;
}

export default function PhoneInput({
  label = "",
  value = "",
  name = "",
  parentClass = "",
  onChange,
  disabled = false,
  required = false,
  placeholder = "Phone number",
  search = false,
  countriesList = false,
  defaultCountry = "",
  errorMessage = "",
}: PhoneInputProps) {
  const find_country_with_code = (countryCode: string) => {
    return (countries as CountryInterface[]).find(
      (obj) => obj.code == countryCode,
    );
  };

  const [selectedCountry, setSelectedCountry] = useState<CountryInterface>(
    find_country_with_code(defaultCountry) ||
      (countries as CountryInterface[])[0],
  );
  const [fullNumber, setFullNumber] = useState("");
  const [localValue, setLocalValue] = useState("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const optionsPanelRef = useRef<HTMLDivElement | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const dropdownPortalTarget =
    typeof document !== "undefined"
      ? (dropdownRef.current?.closest(".racm-root") as HTMLElement | null) ||
        document.body
      : null;

  // Apply mask to phone number
  const applyMask = (digits: string, mask: string): string => {
    let result = "";
    let digitIndex = 0;

    for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
      if (mask[i] === "#") {
        result += digits[digitIndex];
        digitIndex++;
      } else {
        result += mask[i];
      }
    }
    return result;
  };

  // Handle input change
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digits = rawValue.replace(/\D/g, "");

    if (countriesList && selectedCountry?.mask) {
      // Apply mask
      const maskedValue = applyMask(digits, selectedCountry.mask);
      setLocalValue(maskedValue);
      onChange?.("+" + selectedCountry.phone + " " + maskedValue);

      // Update parent with unmasked value
      const unmaskedValue = maskedValue.replace(/\D/g, "");
      setFullNumber(unmaskedValue);
    } else {
      // No mask, just update with digits
      setLocalValue(digits);
      setFullNumber(digits);
      if (selectedCountry && onChange) {
        onChange("+" + selectedCountry.phone + " " + digits);
      } else {
        onChange?.(digits);
      }
    }
  };

  useEffect(() => {
    if (typeof value === "string" && value.startsWith("+")) {
      const match = (countries as CountryInterface[])
        .filter((c) => value.startsWith("+" + c.phone))
        .sort((a, b) => b.phone.length - a.phone.length)[0];
      if (match) {
        setSelectedCountry(match);
        let rawValue = value.replace("+" + match.phone, "").replaceAll(" ", "");
        setFullNumber(rawValue);
        setLocalValue(applyMask(rawValue, match.mask));
        return;
      }
    }
    setFullNumber(value || "");
    setLocalValue(value || "");
  }, []);

  const handleCountrySelect = (country: CountryInterface) => {
    setSelectedCountry(country);
    if (onChange) onChange("+" + country.phone + " " + fullNumber);
    setOpen(false);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !optionsPanelRef.current?.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open || !dropdownRef.current) return;

    const updateDropdownPosition = () => {
      if (!dropdownRef.current) return;

      const rect = dropdownRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    };

    updateDropdownPosition();
    window.addEventListener("resize", updateDropdownPosition);
    window.addEventListener("scroll", updateDropdownPosition, true);

    return () => {
      window.removeEventListener("resize", updateDropdownPosition);
      window.removeEventListener("scroll", updateDropdownPosition, true);
    };
  }, [open]);

  const filteredCountries = (countries as CountryInterface[]).filter(
    (c) =>
      c.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm),
  );

  if (!countriesList) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value.replace(/[^+\d]/g, "");
      const formatted = input.startsWith("+")
        ? "+" + input.replace(/[+]/g, "").slice(0)
        : input;
      onChange?.(formatted);
    };

    return (
      <>
        <div
          key={name}
          className={joinClasses(
            crudClasses.field.wrapper,
            parentClass || "col-span-12",
          )}
        >
          <InputLabel label={label} required={required} />
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className="w-full h-10 px-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md 
        bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none 
        focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-200"
            inputMode="tel"
            pattern="^\+\d{1,15}$"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div
        key={name}
        className={joinClasses(
          crudClasses.field.wrapper,
          parentClass || "col-span-12",
        )}
      >
        <InputLabel label={label} required={required} />
        <div className="relative " ref={dropdownRef}>
          <div
            className={`h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${
    open
      ? "ring-0.5 ring-blue-100 border-blue-300"
      : "border-gray-300 dark:border-gray-600"
  }
  ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    ${errorMessage ? "border-red-500" : ""}`}
          >
            <button
              type="button"
              disabled={disabled}
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 pr-2 border-r border-gray-300 dark:border-gray-700 focus:outline-none"
            >
              {selectedCountry ? (
                <img
                  src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                  alt={selectedCountry.code}
                  className="w-5 h-3 object-cover"
                />
              ) : (
                <span className="text-gray-400 text-xs">🌐</span>
              )}
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </button>

            {selectedCountry && (
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                +{selectedCountry.phone}
              </span>
            )}

            <input
              type="tel"
              value={localValue}
              onChange={handleNumberChange}
              required={required}
              id={`field-${name}`}
              disabled={disabled || !selectedCountry}
              placeholder={
                !selectedCountry
                  ? "Select a country"
                  : placeholder || "Enter phone number"
              }
              className={`flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400`}
              // pattern={selectedCountry?.pattern}
            />

            <input
              type="tel"
              required={required}
              tabIndex={-1}
              readOnly
              value={
                selectedCountry && fullNumber
                  ? "+" + selectedCountry.phone + fullNumber
                  : ""
              }
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                height: 0,
              }}
              onChange={() => {}}
            />
          </div>

          {open &&
            dropdownPortalTarget &&
            createPortal(
              <div
                ref={optionsPanelRef}
                className="fixed border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto"
                style={{
                  top: dropdownPosition.top,
                  left: dropdownPosition.left,
                  width: dropdownPosition.width,
                }}
              >
                {search && (
                  <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search country..."
                        className="w-full pl-9 pr-3 py-2 text-sm border rounded-md bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none "
                      />
                    </div>
                  </div>
                )}

                {filteredCountries.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleCountrySelect(c)}
                    className="w-full flex items-center gap-2 px-2 py-1 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100"
                  >
                    <img
                      src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`}
                      alt={c.code}
                      className="w-5 h-3 object-cover"
                    />
                    <span>
                      {c.label} (+{c.phone})
                    </span>
                  </button>
                ))}
              </div>,
              dropdownPortalTarget,
            )}
        </div>
        {errorMessage && (
          <span
            className={joinClasses(
              crudClasses.field.error,
              "text-red-500 text-xs mt-1",
            )}
          >
            {errorMessage}
          </span>
        )}
      </div>
    </>
  );
}
