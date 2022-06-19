import { useState } from "react";
import { useEncryption } from "../hooks/useEncryption";
import ContentLayout from "./ContentLayout";
import ContentTextArea from "./ContentTextArea";
import EncryptedUrlView from "./EncryptedUrlView";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";
import PageTitle from "./PageTitle";
import PasswordInput from "./PasswordInput";

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
    <MainLayout>
      <HeaderLayout>
        <PageTitle titleText="Encryption" />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          shouldShowPassword={shouldShowPassword}
        />
        <a
          style={{
            marginRight: "12px",
            fontSize: "1em",
            color: "var(--fg-accent-color)",
          }}
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            setShouldShowPassword((shouldShowPassword) => !shouldShowPassword);
          }}
        >
          <em>{shouldShowPassword ? "Hide Password" : "Show Password"}</em>
        </a>
        <a
          style={{
            marginRight: "12px",
            fontSize: "1em",
            color: "var(--fg-accent-color)",
          }}
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            setShouldShowEncrpytedUrl(true);
          }}
        >
          <em>Encrypt</em>
        </a>
      </HeaderLayout>
      <ContentLayout>
        <ContentTextArea
          placeholder="Enter text"
          text={text}
          setText={setText}
          isReadOnly={false}
        />
      </ContentLayout>
    </MainLayout>
  );
}

export default EncryptionView;
