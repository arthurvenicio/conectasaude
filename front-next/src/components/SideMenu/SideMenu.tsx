import { FileSearch, Layers, Users } from "lucide-react";
import Link from "next/link";

export function SideMenu() {
  return (
    <div className="w-56 h-full bg-white flex flex-col items-start justify-start p-2">
      <div className="hover:scale-105">
        <Link
          href="/dashboard"
          className="text-lg font-bold text-blue-800 flex flex-row gap-2"
        >
          <Users size={24} />
          Buscar paciente
        </Link>
      </div>
      <div className="hover:scale-105">
        <Link
          href="/dashboard"
          className="text-lg font-bold text-blue-800 flex flex-row gap-2"
        >
          <FileSearch size={24} />
          Agendar exame
        </Link>
      </div>
      <div className="hover:scale-105">
        <Link
          href="/dashboard/search-exam"
          className="text-lg font-bold text-blue-800 flex flex-row gap-2"
        >
          <FileSearch size={24} />
          Buscar exame
        </Link>
      </div>
      <div className="hover:scale-105">
        <Link
          href="/dashboard"
          className="text-lg font-bold text-blue-800 flex flex-row gap-2"
        >
          <Layers size={24} />
          Consultas
        </Link>
      </div>
    </div>
  );
}
