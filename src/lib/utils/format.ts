export const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

/**
 * Capitalizes the first letter of each word in a string and replaces hyphens with spaces.
 * Also replaces underscores with spaces and trims the result.
 *
 * @param {string} str - The string to capitalize
 * @returns {string} The formatted string with capitalized words
 *
 * @example
 * capitalize("hello-world") // returns "Hello World"
 * capitalize("hello_world") // returns "Hello World"
 * capitalize("hello world") // returns "Hello World"
 */
export const capitalize = (str: string): string => {
  return str
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
};

/**
 * Formats an item name by converting underscore-separated words into a properly capitalized string.
 * Follows title case rules where certain common words (articles, conjunctions, prepositions) remain lowercase
 * unless they appear at the start of the string.
 *
 * @param itemName - The string to format, with words separated by underscores
 * @returns A formatted string with proper title case capitalization and spaces between words
 *
 * @example
 * formatItemName("the_quick_brown_fox") // Returns "The Quick Brown Fox"
 * formatItemName("a_tale_of_two_cities") // Returns "A Tale of Two Cities"
 */
export const formatItemName = (itemName: string) => {
  // List of words to not capitalize
  const exceptions = [
    "and",
    "or",
    "a",
    "an",
    "as",
    "at",
    "but",
    "by",
    "for",
    "in",
    "nor",
    "of",
    "on",
    "the",
    "up",
  ];

  return itemName
    .split("_") // Split the item name by underscores
    .map((word, index) => {
      // Capitalize the first word, or any word that's not an exception
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // Keep the word in lowercase if it's in the exceptions list
      return word.toLowerCase();
    })
    .join(" "); // Join the words back into a string
};
/**
 * Formats a string by replacing spaces with underscores and converting to lowercase.
 *
 * @param str - The string to format
 * @returns The formatted string
 *
 * @example
 * formatString("Hello World") // returns "hello_world"
 */
export const formatURL = (url: string): string => {
  return url.toLowerCase().replaceAll(" ", "_");
};

/**
 * Unformats a string by replacing underscores with spaces and capitalizing each word.
 *
 * @param str - The string to unformat
 * @returns The unformatted string
 *
 * @example
 * unformatString("hello_world") // returns "Hello World"
 */
export const unformatURL = (url: string): string => {
  const segments = url.split("_");
  const formattedSegments = segments.map(
    (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
  );
  return formattedSegments.join(" ");
};

export const formatIconName = (iconName: string): string => {
  const segments = iconName
    .replace("Fa", "")
    .replace("Tb", "")
    .replace("Si", "")
    .replace("Ai", "")
    .replace("Bi", "")
    .replace("Cg", "")
    .replace("Gi", "")
    .replace("Im", "")
    .replace("Io", "")
    .replace("Lu", "")
    .replace("Md", "")
    .replace("Ri", "")
    .replace("Sl", "")
    .replace("Pi", "")
    .split(/(?=[A-Z])/);

  if (segments[0] === "Microphone") {
    return "Public Speaking";
  } else if (segments[0] === "Pencil") {
    return "Creative Writing";
  }
  return segments[0];
};

/**
 * Sorts an array of strings alphabetically.
 *
 * @param arr - The array of strings to sort.
 * @returns A new array sorted alphabetically.
 */
export const sortAlphabetically = (arr: string[]): string[] => {
  return [...arr].sort((a, b) => a.localeCompare(b));
};

/**
 * Sorts an array of strings by the length of each string.
 *
 * @param arr - The array of strings to sort.
 * @returns A new array sorted by string length.
 */
export const sortByLength = (arr: string[]): string[] => {
  return [...arr].sort((a, b) => a.length - b.length);
};

/**
 * Sorts an array of objects alphabetically by a specified key.
 *
 * @param arr - The array of objects to sort.
 * @param key - The key to sort the objects by.
 * @returns A new array sorted alphabetically by the specified key.
 */
export const sortObjectsByKey = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): T[] => {
  return [...arr].sort((a, b) => String(a[key]).localeCompare(String(b[key])));
};

/**
 * Sorts an array of objects by the length of a specified key's value.
 *
 * @param arr - The array of objects to sort.
 * @param key - The key to sort the objects by the length of its value.
 * @returns A new array sorted by the length of the specified key's value.
 */
export const sortObjectsByKeyLength = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): T[] => {
  return [...arr].sort((a, b) => String(a[key]).length - String(b[key]).length);
};
