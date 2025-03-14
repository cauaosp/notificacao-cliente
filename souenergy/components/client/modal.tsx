"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction, useEffect } from "react";

export type TermosECondicoesProps = {
  userId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

export const TermosECondicoes = ({
  userId,
  setOpen,
  open,
}: TermosECondicoesProps) => {
  useEffect(() => {
    const accepted = localStorage.getItem(`accepted_terms_${userId}`);
    if (!accepted) {
      setOpen(true);
    }
  }, [userId, setOpen]);

  const handleAccept = async () => {
    const accepted = localStorage.getItem(`accepted_terms_${userId}`);
    if (!accepted) {
      localStorage.setItem(`accepted_terms_${userId}`, "true");

      await fetch("/api/accept-terms", {
        method: "POST",
        body: JSON.stringify({ userId }),
      });
    }

    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={() => setOpen(true)}>
        <Button className="border bg-zinc-900/25 border-zinc-900 hover:bg-zinc-900/50 hover:cursor-pointer">
          Termos e condições
        </Button>
      </DialogTrigger>

      <DialogContent
        closeButton={true}
        className="bg-green-400 border-0 text-white"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Atualização na Política de Privacidade
          </DialogTitle>
        </DialogHeader>
        <p>
          Atualizamos nossa política de privacidade. Para continuar usando nossa
          plataforma, você precisa aceitar os novos termos.
        </p>
        <DialogFooter>
          <Button
            onClick={handleAccept}
            className="hover:cursor-pointer bg-zinc-800/25 border border-zinc-800 hover:bg-zinc-800/50 font-bold"
          >
            Aceitar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
