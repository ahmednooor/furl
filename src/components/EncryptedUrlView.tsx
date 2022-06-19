import { useState } from "react";
import ContentLayout from "./ContentLayout";
import HeaderLayout from "./HeaderLayout";
import MainLayout from "./MainLayout";
import PageTitle from "./PageTitle";

function EncryptedUrlView({
  encText,
  setShouldShowEncrpytedUrl,
  error,
}: {
  encText: string;
  setShouldShowEncrpytedUrl: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string;
}) {
  const encUrl = `${window.location.origin}${window.location.pathname}#${encText}`;
  const [shouldShowCopiedText, setShouldShowCopiedText] = useState(false);

  return (
    <MainLayout>
      <HeaderLayout>
        <PageTitle titleText="Encrypted Link" />
        {!error && (
          <a
            style={{
              marginRight: "12px",
              fontSize: "1em",
              color: "var(--fg-accent-color)",
            }}
            href="#/"
            onClick={(event) => {
              event.preventDefault();
              navigator.clipboard.writeText(encUrl);
              setShouldShowCopiedText(true);
            }}
          >
            <em>Copy</em>
          </a>
        )}
        {!!shouldShowCopiedText && (
          <em
            style={{
              marginRight: "12px",
              fontSize: "1em",
              opacity: 0.5,
              color: "var(--fg-color)",
            }}
            onClick={() => setShouldShowCopiedText(false)}
          >
            Copied!
          </em>
        )}
        <a
          style={{
            marginRight: "12px",
            fontSize: "1em",
            color: "var(--fg-accent-color)",
          }}
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            setShouldShowEncrpytedUrl(false);
          }}
        >
          <em>Go Back</em>
        </a>
      </HeaderLayout>
      <ContentLayout>
        {!!error ? (
          <em style={{ opacity: 0.5 }}>{error}</em>
        ) : (
          <a
            style={{
              display: "block",
              backgroundColor: "var(--bg-color)",
              border: "1px solid var(--bg-color)",
              borderRadius: "4px",
              padding: "8px 12px",
              height: "100%",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              color: "var(--fg-accent-color)",
            }}
            href={encUrl}
            rel="noreferrer"
            target="_blank"
          >
            <code>{encUrl}</code>
          </a>
        )}
      </ContentLayout>
    </MainLayout>
  );
}

export default EncryptedUrlView;
