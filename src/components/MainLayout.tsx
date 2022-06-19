import { ReactNode } from "react";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default MainLayout;
