import React, { useState, useEffect, useRef } from "react";
import { countries } from "../../../data/countries";
import { ChevronDown, Search } from "lucide-react";
import InputLabel from "./InputLabel";

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
}) {
  const find_country_with_code = (value) => {
    return countries.find((obj) => obj.code == value);
  };

  const [selectedCountry, setSelectedCountry] = useState(
    find_country_with_code(defaultCountry) || countries[0],
  );
  const [fullNumber, setFullNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef();

  // Match prefix when value starts with +code
  useEffect(() => {
    if (typeof value === "string" && value.startsWith("+")) {
      const match = countries
        .filter((c) => value.startsWith("+" + c.phone))
        .sort((a, b) => b.phone.length - a.phone.length)[0];
      if (match) {
        setSelectedCountry(match);
        setFullNumber(value.replace("+" + match.phone, ""));
        return;
      }
    }
    setFullNumber(value);
  }, [value]);

  const handleNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    setFullNumber(input);
    if (selectedCountry && onChange) {
      onChange("+" + selectedCountry.phone + input);
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    if (onChange) onChange("+" + country.phone + fullNumber);
    setOpen(false);
    setSearchTerm("");
  };

  // 🖱️ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter(
    (c) =>
      c.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm),
  );

  if (!countriesList) {
    const handleInputChange = (e) => {
      const input = e.target.value.replace(/[^+\d]/g, "");
      const formatted = input.startsWith("+")
        ? "+" + input.replace(/[+]/g, "").slice(0)
        : input;
      onChange(formatted);
    };

    return (
      <>
        <div key={name} className={parentClass || "col-span-12"}>
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
      <div key={name} className={parentClass || "col-span-12"}>
        <InputLabel label={label} required={required} />
        <div className="relative " ref={dropdownRef}>
          {/* Input container */}
          <div
            className={`h-[40px] flex items-center border rounded-md px-2 bg-white dark:bg-gray-700 transition-all
  ${
    open
      ? "ring-0.5 ring-blue-100 border-blue-300"
      : "border-gray-300 dark:border-gray-600"
  }
  ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {/* Flag & dropdown */}
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

            {/* Country code */}
            {selectedCountry && (
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                +{selectedCountry.phone}
              </span>
            )}

            {/* Number input */}
            <input
              type="tel"
              value={fullNumber}
              onChange={handleNumberChange}
              required={required}
              disabled={disabled || !selectedCountry}
              placeholder={!selectedCountry ? "Select a country" : placeholder}
              className="flex-1 ml-2 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400"
            />

            {/* Hidden input for native browser validation */}
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
            />
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full left-0 w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 shadow-lg z-50 max-h-60 overflow-y-auto">
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}
