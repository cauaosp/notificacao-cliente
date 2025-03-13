"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FakeLoginApi } from "@/lib/hooks/loginApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  user: z.string().min(3, { message: "Usuário deve ter no minímo 3 letras" }),
  password: z
    .string()
    .min(6, { message: "A senha deve conter no minímo 6 numeros" }),
});

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await FakeLoginApi(data.user, data.password);
    alert(response);
    if (response.role === "admin") {
      router.push("/administrator");
    } else if (response.role === "client") {
      router.push("/client");
    } else {
      setError(response.error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 relative"
      >
        <FormField
          control={form.control}
          name="user"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold tracking-wide">usuário</FormLabel>
              <FormControl>
                <Input
                  className="text-white placeholder:text-white"
                  type="text"
                  placeholder="Digite seu usuário"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold tracking-wide">Senha</FormLabel>
              <FormControl>
                <Input
                  className="text-white placeholder:text-white"
                  type="password"
                  placeholder="Digite sua senha"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-orange-600 hover:cursor-pointer hover:bg-orange-700 font-bold"
        >
          Entrar
        </Button>
        {error && (
          <div className="absolute -bottom-10 left-0 text-red-500 font-bold">
            {error}
          </div>
        )}
      </form>
    </Form>
  );
};
