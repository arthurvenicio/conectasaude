import Image from "next/image";

export function PatientInformation() {
  return (
    <div className="flex-1 grid grid-cols-4">
      <div className="border flex items-center justify-center">
        <Image
          src="https://i.imgur.com/VoKGrwB.png"
          width={200}
          height={200}
          alt="Patient photo's"
          className="rounded-md"
        />
      </div>
      <div className="border col-span-3 flex p-4 flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold">Nome completo</h2>
          <p>Almir Pontes Soares Brito</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Data de nascimento</h2>
          <p>26/07/1988</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">CPF</h2>
          <p>845.252.523-08</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">CNH</h2>
          <p>12802956119</p>
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <h2 className="text-lg font-semibold">Endereço</h2>
            <p>Rua Otavio Francisco de Queiroz</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Número</h2>
            <p>346</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">CEP</h2>
            <p>55195-821</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Cidade</h2>
            <p>Santa Cruz do Capibaribe</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">UF</h2>
            <p>PE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
