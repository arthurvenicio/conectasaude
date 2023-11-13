import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export interface IRenderPages {
  children: React.ReactNode;
}

export function RenderPages({ children }: IRenderPages) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
