import { useState } from "react";
import { useDecryption } from "../hooks/useDecryption";
import ContentLayout from "./ContentLayout";
import ContentTextArea from "./ContentTextArea";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";
import PageTitle from "./PageTitle";
import PasswordInput from "./PasswordInput";

function DecryptionView({ hashValue }: { hashValue: string }) {
  const [password, setPassword] = useState("");
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const decText = useDecryption(hashValue, password);

  return (
    <MainLayout>
      <HeaderLayout>
        <PageTitle titleText="Decryption" />
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
          href={`${window.location.origin}${window.location.pathname}`}
          rel="noreferrer"
          // target="_blank"
        >
          <em>Create New</em>
        </a>
      </HeaderLayout>
      <ContentLayout>
        {password === "" ? (
          <em style={{ opacity: 0.5 }}>Please type a password</em>
        ) : password !== "" && decText === "" ? (
          <em style={{ opacity: 0.5 }}>Probably incorrect password</em>
        ) : (
          <ContentTextArea
            text={decText}
            setText={(_) => {}}
            isReadOnly={true}
          />
        )}
      </ContentLayout>
    </MainLayout>
  );
}

export default DecryptionView;
