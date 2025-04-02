/**
 *
 * @param key Key which is used to search the value in local storage
 * @default key: is required
 */
export const getLocalStorageItem = (key: string) => {
  /**
   * Type checks, local storage is not availabe in server side
   */
  if (typeof window === "undefined") {
    return;
  }

  if (!key) {
    throw new Error("Key cannot be empty in localstorage");
  }

  const resp = localStorage.getItem(key);

  if (!resp) return null;

  return JSON.parse(resp);
};

/**
 *
 * @param key Key which is used to store the value with keys in local storage
 * @default key: unique identifier, Key is required
 */
export const setLocalStorageItem = (key: string, value: unknown) => {
  if (typeof window === "undefined") {
    return;
  }

  if (!key || !value) {
    throw new Error(
      `Key or value cannot be empty, key:${key} and value:${value}`
    );
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorageItem = (key: string) => {
  if (!key) {
    throw new Error("Key cannot be empty in localstorage");
  }

  localStorage.removeItem(key);
};
