import { PatientConsultation } from '@/types/patient';

interface PatientConsultationItemProps {
  consultation: PatientConsultation;
}

export function PatientConsultationItem({
  consultation
}: PatientConsultationItemProps) {
  const { id, date, responsibleDoctor, unit } = consultation;

  return (
    <div className="w-full h-20 border p-4 grid grid-cols-2 hover:bg-slate-50">
      <div className="flex-1">
        <p className="text-xl font-medium">{unit}</p>
        <p className="text-sm font-normal">Data: {date}</p>
      </div>
      <div className="flex-1 flex flex-row gap-3 items-center">
        <p className="text-md font-medium">Médico:</p>
        <p className="text-md font-normal">{responsibleDoctor.name}</p>
      </div>
    </div>
  );
}
