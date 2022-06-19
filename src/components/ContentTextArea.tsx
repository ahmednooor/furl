function ContentTextArea({
  placeholder = "",
  text,
  setText,
  isReadOnly,
}: {
  placeholder?: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isReadOnly: boolean;
}) {
  return (
    <textarea
      style={{
        fontSize: "1em",
        display: "block",
        width: "100%",
        height: "100%",
        padding: "8px 12px",
        whiteSpace: "pre",
        overflowWrap: "normal",
        overflow: "auto",
        color: "var(--fg-color)",
        backgroundColor: "var(--bg-color)",
        borderRadius: "4px",
      }}
      placeholder={placeholder}
      readOnly={isReadOnly}
      wrap="off"
      value={text}
      onChange={(event) => setText(event.currentTarget.value)}
    >
      {text}
    </textarea>
  );
}

export default ContentTextArea;
