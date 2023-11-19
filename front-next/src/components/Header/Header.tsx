"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
  }, [hour]);

  return (
    <div className="w-full h-20 bg-white flex flex-row border-b">
      <div className="flex-1 flex items-center justify-center flex-row gap-2">
        <Image src="/logo_govbr.png" alt="Logo" width={50} height={50} />
        <h1 className="text-2xl text-blue-900 font-bold">Conecta Saúde</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="font-semibold">{hour}</p>
      </div>
      <div className="flex-1 flex flex-row gap-10 items-center justify-center">
        <p className="text-xl font-semibold">Juarez Rodrigues</p>
        <Image
          src="https://i.imgur.com/VoKGrwB.png"
          alt="User photo"
          width={40}
          height={40}
          className="rounded-full border-blue-900 border"
        />
      </div>
    </div>
  );
}
