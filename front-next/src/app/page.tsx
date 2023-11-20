"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  push("/login");
  return (
    <div>
      <p>a</p>
    </div>
  );
}
