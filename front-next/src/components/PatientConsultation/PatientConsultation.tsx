import { PatientConsultation } from '@/types/patient';
import { MonitorX } from 'lucide-react';
import { PatientConsultationItem } from '../PatientConsultationItem/PatientConsultationItem';

const patientConsultation: PatientConsultation[] = [
  {
    date: new Date().toLocaleDateString('pt-BR'),
    id: '123123123123123',
    patientId: '123123123123123',
    responsibleDoctor: {
      id: '123123123123123',
      name: 'Dra. Gabriela Campos',
      crm: '123123123123123',
      crmUf: 'CE',
      document: '14338189061'
    },
    unit: 'Hospital Geral de Fortaleza'
  }
];

export function PatientConsultation() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start">
      {!patientConsultation.length && (
        <div className="flex flex-col items-center justify-center gap-4">
          <MonitorX size={180} className="text-gray-400" />
          <p className="text-xl font-semibold text-gray-400">
            O Paciente não possui consultas anteriores.
          </p>
        </div>
      )}

      {patientConsultation.length &&
        patientConsultation.map((consultation, index) => (
          <PatientConsultationItem key={index} consultation={consultation} />
        ))}
    </div>
  );
}
