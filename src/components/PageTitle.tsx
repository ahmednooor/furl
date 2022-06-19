function PageTitle({ titleText }: { titleText: string }) {
  return (
    <span
      style={{
        marginRight: "12px",
        fontSize: "1em",
        color: "var(--fg-color)",
      }}
    >
      {titleText}
    </span>
  );
}

export default PageTitle;
