"use client";
import { cpfMask } from "@/utils/maks";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  cpf: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const [cpf, setCpf] = useState<string>("");

  const handleOnSubmit = (data: FormData) => {};

  return (
    <div className="w-screen h-screen bg-blue-900 flex items-center justify-center">
      <div className="bg-white w-96 h-96 rounded-md flex flex-col gap-3 items-center justify-center">
        <div>
          <h1 className="text-blue-900 text-2xl font-bold">Conecta Saúde</h1>
        </div>
        <div>
          <form
            className="flex-1 flex flex-col items-center justify-center gap-4"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm">CPF</p>
              <input
                type="text"
                className="w-full h-10 border p-2"
                value={cpf}
                {...register("cpf", {
                  onChange: (ev) => {
                    setCpf(cpfMask(ev.target.value));
                  },
                })}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm">Senha</p>
              <input
                type="password"
                className="w-full h-10 border p-2"
                {...register("password")}
              />
            </div>
            <div>
              <Link
                href="/forget-password"
                className="text-xs text-blue-900 font-semibold"
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <div className="flex flex-1">
              <button className="bg-blue-900 text-white p-4 rounded-md">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
