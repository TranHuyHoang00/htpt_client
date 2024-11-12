const storagePrefix = import.meta.env.VITE_STORAGE_INITIAL;
const getStorageKey = (key: string): string => {
  return `${storagePrefix}${key}`;
};
const storage = {
  getData: (name: string) => {
    const data = window.localStorage.getItem(getStorageKey(name));
    return data ? JSON.parse(data) : null;
  },
  setData: (name: string, data: any) => {
    window.localStorage.setItem(getStorageKey(name), JSON.stringify(data));
  },
  clearData: (name: string) => {
    window.localStorage.removeItem(getStorageKey(name));
  },
};
export default storage;
