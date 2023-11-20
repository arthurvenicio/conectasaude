import { PatientExam } from '@/types/patient';

interface PatientExamItemProps {
  exam: PatientExam;
}

export function PatientExamItem({ exam }: PatientExamItemProps) {
  const { id, description, date, requestingDoctor } = exam;
  return (
    <div className="w-full h-20 border p-4 grid grid-cols-2 hover:bg-slate-50">
      <div className="flex-1">
        <p className="text-xl font-medium">{description}</p>
        <p className="text-sm font-normal">Data: {date}</p>
      </div>
      <div className="flex-1 flex flex-row gap-3 items-center">
        <p className="text-md font-medium">Medico solicitante:</p>
        <p className="text-md font-normal">{requestingDoctor.name}</p>
      </div>
    </div>
  );
}
