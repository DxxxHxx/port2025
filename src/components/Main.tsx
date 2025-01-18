import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <div className="main" role="main">
      {children}
    </div>
  );
}
