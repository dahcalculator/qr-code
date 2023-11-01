

import RegisterForm from "../components/RegisterForm";
import {redirect} from "next-auth"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";



export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return <RegisterForm />;
}
