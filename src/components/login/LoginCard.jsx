import Input from "../ui/Input";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div
      className="
        w-full
        max-w-[400px]

        rounded-xl
        border
        border-green-200

        bg-white/90

        p-8

        shadow-xl
        backdrop-blur-sm
      "
    >
      <form className="space-y-5 flex flex-col items-center justify-center" onSubmit={handleLogin}>
        <Input
          label="Usuário / E-mail"
          placeholder="email@email.com"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Sua senha"
        />

        <Button className="w-64 align-center" type="submit">
          Entrar
        </Button>
      </form>
    </div>
  );
}