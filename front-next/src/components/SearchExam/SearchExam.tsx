"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormData = {
  code: string;
};

export function SearchExam() {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleOnSearch = (data: FormData) => {
    push("/dashboard/exam");
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
          placeholder="Digite o número do exame"
          maxLength={20}
          {...register("code")}
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
