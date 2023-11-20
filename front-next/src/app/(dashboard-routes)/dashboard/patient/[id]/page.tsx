'use client';
import { PatientConsultation } from '@/components/PatientConsultation/PatientConsultation';
import { PatientExam } from '@/components/PatientExam/PatientExam';
import { PatientInformation } from '@/components/PatientInformation/PatientInformation';
import { TabSelected } from '@/enums/tabselected-enum';
import { useState } from 'react';

export default function PatientPage() {
  const [tabSelected, setTabSelected] = useState(TabSelected.INFORMATION);
  return (
    <div className="flex-1 h-full bg-blue-900 flex items-center justify-center">
      <div className="bg-white w-11/12 h-5/6 flex flex-col">
        <div className="border-b border-blue-900 p-4 w-full h-20">
          <p className="text-2xl font-semibold text-blue-800">
            Paciente: Almir Pontes Soares Brito
          </p>
          <p className="text-xs font-semibold text-blue-800">
            CNS: 253530687340003
          </p>
        </div>
        <div className="flex-1 border-b flex">
          <button
            className={`flex-1 border-r hover:bg-slate-50 font-medium ${
              tabSelected === TabSelected.INFORMATION
                ? 'bg-gray-100'
                : 'text-gray-500'
            }`}
            onClick={() => setTabSelected(TabSelected.INFORMATION)}
          >
            Informações
          </button>
          <button
            className={`flex-1 border-r hover:bg-slate-50 font-medium ${
              tabSelected === TabSelected.EXAM ? 'bg-gray-100' : 'text-gray-500'
            }`}
            onClick={() => setTabSelected(TabSelected.EXAM)}
          >
            Exames
          </button>
          <button
            className={`flex-1 border-r hover:bg-slate-50 font-medium ${
              tabSelected === TabSelected.CONSULTATION
                ? 'bg-gray-100'
                : 'text-gray-500'
            }`}
            onClick={() => setTabSelected(TabSelected.CONSULTATION)}
          >
            Consultas
          </button>
        </div>
        <div className="flex-[10] border-b flex">
          {tabSelected === TabSelected.INFORMATION && <PatientInformation />}
          {tabSelected === TabSelected.EXAM && <PatientExam />}
          {tabSelected === TabSelected.CONSULTATION && <PatientConsultation />}
        </div>
      </div>
    </div>
  );
}
