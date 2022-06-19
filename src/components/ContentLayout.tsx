import { ReactNode } from "react";

function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "16px",
        paddingTop: "0px",
        maxWidth: "100%",
        flexGrow: "1",
        color: "var(--fg-color)",
        backgroundColor: "var(--floor-color)",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

export default ContentLayout;
