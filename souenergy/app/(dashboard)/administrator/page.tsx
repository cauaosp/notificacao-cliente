"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
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
    <div className="mx-auto flex flex-col bg-green-400/10 border border-green-400 max-w-[500px] mt-5 p-2 rounded-lg">
      <div
        className="absolute left-5 top-5 border border-red-400 bg-red-400/10 p-2 rounded-lg hover:cursor-pointer hover:bg-red-400/25 text-zinc-800"
        onClick={() => router.push("/")}
      >
        Sair
      </div>
      <h1 className="font-bold text-orange-600 mb-5">Painel Administrativo</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Usuários</TableHead>
            <TableHead>Aceitou os Termos?</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.acceptedTerms ? "Sim" : "Não"}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2} className="h-24 text-center">
                Nenhum usuário encontrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
