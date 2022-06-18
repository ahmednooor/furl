import { useState } from "react";
import { useDecryption } from "../hooks/useDecryption";

function DecryptionView({ hashValue }: { hashValue: string }) {
  const [password, setPassword] = useState("");
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const decText = useDecryption(hashValue, password);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          padding: "16px",
        }}
      >
        <p
          style={{
            fontSize: "1em",
          }}
        >
          <span
            style={{
              marginRight: "12px",
              fontSize: "1em",
            }}
          >
            Enter your password
          </span>
          <a
            style={{
              marginRight: "12px",
              fontSize: "1em",
            }}
            href="#/"
            onClick={(event) => {
              event.preventDefault();
              setShouldShowPassword(
                (shouldShowPassword) => !shouldShowPassword
              );
            }}
          >
            <em>{shouldShowPassword ? "Hide Password" : "Show Password"}</em>
          </a>
          <a
            style={{
              marginRight: "12px",
              fontSize: "1em",
            }}
            href={window.location.origin}
            rel="noreferrer"
            target="_blank"
          >
            <em>Create New</em>
          </a>
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            style={{
              marginTop: "8px",
              fontSize: "1em",
              display: "block",
              width: "100%",
              padding: "4px 8px",
            }}
            autoFocus={true}
            type={shouldShowPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event?.currentTarget.value)}
          />
        </div>
      </div>
      <div
        style={{
          padding: "0px 16px",
        }}
      >
        <hr />
      </div>
      <div
        style={{
          padding: "16px",
          maxWidth: "100%",
          overflow: "auto",
          flexGrow: "1",
        }}
      >
        {password === "" && (
          <em style={{ opacity: 0.75 }}>Please type a password</em>
        )}
        {password !== "" && decText === "" && (
          <em style={{ opacity: 0.75 }}>Probably incorrect password</em>
        )}
        <pre>
          <p>{decText}</p>
        </pre>
      </div>
    </div>
  );
}

export default DecryptionView;
