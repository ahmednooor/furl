import sjcl from "sjcl";

export const useDecryption = (text: string, key: string): string => {
  try {
    return sjcl.decrypt(key, text);
  } catch {
    return "";
  }
};
