import { useUrlHash } from "../hooks/useUrlHash";
import DecryptionView from "./DecryptionView";
import EncryptionView from "./EncryptionView";

function App() {
  const hashValue = useUrlHash();

  return (
    <div>
      <>
        {!!hashValue ? (
          <DecryptionView hashValue={hashValue} />
        ) : (
          <EncryptionView />
        )}
      </>
    </div>
  );
}

export default App;
