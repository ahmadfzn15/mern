import Layout from "../Layout/Layout";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import AuthOther from "../Components/AuthOther";

export default function Auth() {
  return (
    <>
      <Layout className="space-y-5 p-5">
        <SignIn />
        <SignUp />
        <AuthOther />
      </Layout>
    </>
  );
}
