import { ReactNode } from "react";

function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "16px",
        fontSize: "1em",
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default HeaderLayout;
