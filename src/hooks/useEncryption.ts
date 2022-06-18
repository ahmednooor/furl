import sjcl from "sjcl";

export const useEncryption = (text: string, key: string): string => {
  try {
    return sjcl.encrypt(key, text).toString();
  } catch {
    return "";
  }
};
