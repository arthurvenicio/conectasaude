export interface PatientExam {
  id: string;
  description: string;
  date: string;
  patientId: string;
  requestingDoctor: Doctor;
  responsibleDoctor?: Doctor;
}

export interface Doctor {
  id: string;
  name: string;
  crm: string;
  crmUf: string;
  document: string;
}

export interface PatientConsultation {
  id: string;
  patientId: string;
  responsibleDoctor: Doctor;
  date: string;
  unit: string;
}
