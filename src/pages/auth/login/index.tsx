import Login from "@/components/views/Auth/Login";
import AuthLayout from "@/components/layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Eventsin | Login">
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
