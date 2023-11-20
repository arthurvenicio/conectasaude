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
