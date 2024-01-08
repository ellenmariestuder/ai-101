import Image from "next/image";
import AuthNavbar from "../../components/auth/authNavbar";

export default function AuthLayout({ children }) {
  return (
    <section className="w-full h-full bg-backgroundPrimary">
      <AuthNavbar />
      <div className="flex">{children}</div>
      <Image src={"/AI-bot.png"} alt="aibot" width={400} height={400} />
    </section>
  );
}
