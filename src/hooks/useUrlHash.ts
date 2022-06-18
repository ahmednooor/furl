import { useState } from "react";

export const useUrlHash = (): string => {
  const [urlHash] = useState(() =>
    window.location.hash !== ""
      ? window.location.hash.substring(1)
      : window.location.hash
  );

  return decodeURI(urlHash);
};
