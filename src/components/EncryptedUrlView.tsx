import { useState } from "react";

function EncryptedUrlView({
  encText,
  setShouldShowEncrpytedUrl,
  error,
}: {
  encText: string;
  setShouldShowEncrpytedUrl: React.Dispatch<React.SetStateAction<boolean>>;
  error?: string;
}) {
  const encUrl = `${window.location.origin}/#${encText}`;
  const [shouldShowCopiedText, setShouldShowCopiedText] = useState(false);

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
            Encrypted Link
          </span>
          <a
            style={{
              marginRight: "12px",
              fontSize: "1em",
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
          {!!shouldShowCopiedText && (
            <em
              style={{
                marginRight: "12px",
                fontSize: "1em",
                opacity: 0.75,
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
            }}
            href="#/"
            onClick={(event) => {
              event.preventDefault();
              setShouldShowEncrpytedUrl(false);
            }}
          >
            <em>Go Back</em>
          </a>
        </p>
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
        {!!error ? (
          <em style={{ opacity: 0.75 }}>{error}</em>
        ) : (
          <a
            style={{
              marginRight: "12px",
              fontSize: "1em",
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
            }}
            href={encUrl}
            rel="noreferrer"
            target="_blank"
          >
            <code>{encUrl}</code>
          </a>
        )}
      </div>
    </div>
  );
}

export default EncryptedUrlView;
