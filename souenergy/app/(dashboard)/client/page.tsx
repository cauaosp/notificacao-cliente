"use client";

import { TermosECondicoes } from "@/components/client/modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function DashboardContent() {
  const searchParams = useSearchParams();
  const user = searchParams.get("userId") ?? "";
  const router = useRouter();

  const [open, setOpen] = useState(true);

  return (
    <div className="mx-auto bg-green-400 w-96 p-2 mt-5 rounded-lg flex flex-col gap-2 shadow-2xl">
      <div
        className="text-red-400 absolute left-5 top-5 border border-red-400 bg-red-400/10 p-2 rounded-lg hover:cursor-pointer hover:bg-red-400/25"
        onClick={() => router.push("/")}
      >
        Sair
      </div>
      <h1 className="text-neutral-100 font-bold">Olá, {user}</h1>

      <TermosECondicoes userId={user} setOpen={setOpen} open={open} />
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
