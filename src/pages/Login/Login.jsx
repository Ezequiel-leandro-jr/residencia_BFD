import LoginHeader from "../../components/login/LoginHeader";
import LoginCard from "../../components/login/LoginCard";

export default function Login() {
  return (
    <main
      className="
      flex
      min-h-screen
      flex-col
      items-center
      justify-center

      bg-gradient-to-b
      from-white
      via-[var(--color-neutral-100)]
    to-[var(--color-green-500)]

      px-4
    "
    >
      <LoginHeader />

      <LoginCard />
    </main>
  );
}