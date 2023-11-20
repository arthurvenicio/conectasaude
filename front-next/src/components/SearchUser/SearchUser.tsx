"use client";
import { cpfMask, onlyNumbers } from "@/utils/maks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  document: string;
};

export function SearchUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [document, setDocument] = useState<string>("");
  const { push } = useRouter();

  const handleOnSearch = (data: FormData) => {
    push(`/dashboard/patient/${onlyNumbers(data.document)}`);
  };

  return (
    <form
      className="flex flex-col gap-4 items-center justify-centers"
      onSubmit={handleSubmit(handleOnSearch)}
    >
      <div>
        <input
          type="text"
          className="border-b w-full focus:outline-none p-2 text-center"
          placeholder="Digite o CPF do paciente"
          value={document}
          {...register("document", {
            onChange: (ev) => {
              setDocument(cpfMask(ev.target.value));
            },
          })}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-900 text-white rounded-md p-2 w-full"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
