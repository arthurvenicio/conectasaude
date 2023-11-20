import { PatientExam } from '@/types/patient';
import { MonitorX } from 'lucide-react';
import { PatientExamItem } from '../PatientExamItem/PatientExamItem';

const patientExams: PatientExam[] = [
  {
    id: '124j83129h4243h21',
    description: 'Exame de sangue',
    date: new Date().toLocaleDateString('pt-BR'),
    requestingDoctor: {
      id: '123123123123123',
      name: 'Dr. Geraldo Alves',
      crm: '123123123123123',
      crmUf: 'CE',
      document: '14338189061'
    },
    patientId: '182793h2184g214g3021'
  },
  {
    id: '124j83129h4243h21',
    description: 'Exame de urina',
    date: new Date().toLocaleDateString('pt-BR'),
    requestingDoctor: {
      id: '123123123123123',
      name: 'Dra. Gabriela Campos',
      crm: '123123123123123',
      crmUf: 'CE',
      document: '14338189061'
    },
    patientId: '182793h2184g214g3021'
  }
];

export function PatientExam() {
  return (
    <div className="flex-1 flex flex-col items-center justify-start">
      {!patientExams.length && (
        <div className="flex flex-col items-center justify-center gap-4">
          <MonitorX size={180} className="text-gray-400" />
          <p className="text-xl font-semibold text-gray-400">
            O Paciente não possui exames.
          </p>
        </div>
      )}

      {patientExams.length &&
        patientExams.map((exam, index) => (
          <PatientExamItem key={index} exam={exam} />
        ))}
    </div>
  );
}
