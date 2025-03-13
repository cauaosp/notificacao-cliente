import { LoginForm } from "@/components/login/forms";

export default function Login() {
  return (
    <div className="w-96 mx-auto mt-5 bg-zinc-600 border border-zinc-900 text-white p-2 rounded-lg">
      <h1 className="text-orange-600 font-bold mb-5 text-3xl">
        Login
      </h1>
      <LoginForm />
    </div>
  );
}
