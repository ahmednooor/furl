import { useState } from "react";
import { useEncryption } from "../hooks/useEncryption";
import EncryptedUrlView from "./EncryptedUrlView";

function EncryptionView() {
  const [password, setPassword] = useState("");
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [text, setText] = useState("");
  const encText = encodeURI(useEncryption(text, password));
  const [shouldShowEncrpytedUrl, setShouldShowEncrpytedUrl] = useState(false);

  if (shouldShowEncrpytedUrl) {
    return (
      <EncryptedUrlView
        encText={encText}
        setShouldShowEncrpytedUrl={setShouldShowEncrpytedUrl}
        error={
          password === ""
            ? "Please type a password"
            : text === ""
            ? "Please type some text"
            : ""
        }
      />
    );
  }

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
            href="#/"
            onClick={(event) => {
              event.preventDefault();
              setShouldShowEncrpytedUrl(true);
            }}
          >
            <em>Encrypt</em>
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          style={{
            fontSize: "1em",
            display: "block",
            width: "100%",
            padding: "4px 8px",
            flexGrow: "1",
            whiteSpace: "pre",
            overflowWrap: "normal",
            overflowX: "scroll",
          }}
          wrap="off"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default EncryptionView;
