import { Header } from "@/components/Header/Header";
import { SideMenu } from "@/components/SideMenu/SideMenu";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-row">
          <SideMenu />
          <div className="flex-[6]">{children}</div>
        </div>
      </div>
    </>
  );
}
