"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the user type
type User = {
  id: string;
  name: string;
  email: string;
  acceptedTerms: boolean;
};

export default function Administrator() {
  const [users, setUsers] = useState<User[]>([]); // Define users as an array of User
  const router = useRouter();

  useEffect(() => {
    const storedUsers: User[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    setUsers(storedUsers);
  }, []);

  return (
    <div className="mx-auto flex flex-col bg-green-400/10 border border-green-400 max-w-[500px] mt-5 p-2">
      <div
        className="absolute left-5 top-5 border border-red-400 bg-red-400/10 p-2 rounded-lg hover:cursor-pointer hover:bg-red-400/25 text-zinc-800"
        onClick={() => router.push("/")}
      >
        Sair
      </div>
      <h1 className="font-bold text-orange-600 mb-5">Painel Administrativo</h1>
      <table className="border border-zinc-800 text-zinc-800">
        <thead className="border border-zinc-800">
          <tr>
            <th className="border border-zinc-800">Nome</th>
            <th className="border border-zinc-800">Aceitou os Termos?</th>
          </tr>
        </thead>
        <tbody className="border border-zinc-800">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border border-zinc-800">{user.name}</td>
                <td className="border border-zinc-800">{user.acceptedTerms ? "Sim" : "Não"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Nenhum usuário encontrado</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
