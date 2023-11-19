import { SearchUser } from "@/components/SearchUser/SearchUser";

export default function Dashboard() {
  return (
    <div className="flex-1 h-full bg-blue-900 flex items-center justify-center">
      <div className="bg-white w-96 h-96 rounded-md flex flex-col gap-6 items-center justify-center">
        <div>
          <h1 className="text-blue-900 text-2xl font-bold">Buscar Paciente</h1>
        </div>
        <div>
          <SearchUser />
        </div>
      </div>
    </div>
  );
}
