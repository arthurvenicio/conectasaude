import { MonitorX } from "lucide-react";

export function PatientExam() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <MonitorX size={180} className="text-gray-400" />
        <p className="text-xl font-semibold text-gray-400">
          O Paciente não possui exames.
        </p>
      </div>
    </div>
  );
}
