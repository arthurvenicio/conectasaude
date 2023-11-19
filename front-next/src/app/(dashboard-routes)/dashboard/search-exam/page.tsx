import { SearchExam } from "@/components/SearchExam/SearchExam";

export default function SearchExamPage() {
  return (
    <div className="flex-1 h-full bg-blue-900 flex items-center justify-center">
      <div className="bg-white w-96 h-96 rounded-md flex flex-col gap-6 items-center justify-center">
        <div>
          <h1 className="text-blue-900 text-2xl font-bold">Buscar Exame</h1>
        </div>
        <div>
          <SearchExam />
        </div>
      </div>
    </div>
  );
}
