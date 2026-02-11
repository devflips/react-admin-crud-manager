// ======= Format Date : Jan 15, 2024 =======

export const formatDate = (dateString, format = "DD MMM YYYY") => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date)) return "Invalid Date";

  const pad = (n) => String(n).padStart(2, "0");

  const map = {
    YYYY: date.getFullYear(),
    YY: String(date.getFullYear()).slice(-2),

    MMMM: date.toLocaleString("en-US", { month: "long" }),
    MMM: date.toLocaleString("en-US", { month: "short" }),
    MM: pad(date.getMonth() + 1),
    M: date.getMonth() + 1,

    DD: pad(date.getDate()),
    D: date.getDate(),

    dddd: date.toLocaleString("en-US", { weekday: "long" }),
    ddd: date.toLocaleString("en-US", { weekday: "short" }),

    HH: pad(date.getHours()),
    hh: pad(date.getHours() % 12 || 12),

    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),

    A: date.getHours() >= 12 ? "PM" : "AM",
  };

  return format.replace(
    /YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|hh|mm|ss|A/g,
    (token) => map[token],
  );
};

// =========== Local Search function ===========
export const searchLocalData = (data, searchTerm, searchKeys = []) => {
  if (!searchTerm?.trim()) return data;

  const lowerSearchTerm = searchTerm.toLowerCase();

  const extractValues = (obj) => {
    if (obj == null) return [];
    if (typeof obj === "object") {
      return Object.values(obj).flatMap(extractValues);
    }
    return [String(obj)];
  };

  return data.filter((item) => {
    let valuesToSearch = [];

    // ✅ If specific keys are provided → search only in those keys
    if (searchKeys.length > 0) {
      searchKeys.forEach((key) => {
        if (item[key] !== undefined) {
          valuesToSearch.push(...extractValues(item[key]));
        }
      });
    } else {
      // ✅ Otherwise → search in entire object
      valuesToSearch = extractValues(item);
    }

    return valuesToSearch.some((val) =>
      val.toLowerCase().includes(lowerSearchTerm),
    );
  });
};
