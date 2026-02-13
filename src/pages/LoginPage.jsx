import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useAppContext } from "../contexts/AppContext";
import { Input } from "../components/Form/components/Input";
import Button from "../components/Button/Button";
import RenderFields from "../components/Form/components/RenderFields";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "admin@crud.com",
    password: "admin@crud.com",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await login(formData.email, formData.password);
    if (result.success) {
      navigate("/dashboard");
    }
    setIsLoading(false);
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const loginFields = [
    {
      key: "email",
      label: "Email address",
      type: "email",
      placeholder: "Enter your email",
      icon: <Mail className="h-5 w-5 text-gray-400 z-10" />,
      required: true,
      className: "block w-full pl-10 pr-3 py-3",
    },
    {
      key: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      icon: <Lock className="h-5 w-5 text-gray-400 z-10" />,
      required: true,
      className: "block w-full pl-10 pr-12 py-3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:flex lg:col-span-6 items-center justify-center p-8 lg:p-16">
          {/* add left side designs here */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-blue-500">
              CRUD Manager
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mt-4">
              Effortlessly manage your application data through{" "}
              <span className="font-semibold text-blue-400">
                config-based components
              </span>
              .
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-500 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✔</span>
                  <span>Config-driven CRUD operations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✔</span>
                  <span>Dynamic table & form rendering</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✔</span>
                  <span>Seamless API integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✔</span>
                  <span>Built with React & Tailwind</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Welcome Back
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Sign in to your admin account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {loginFields.map((field) => (
                  <RenderFields
                    key={field.key}
                    field={field}
                    formData={formData}
                    handleChange={handleInputChange}
                  />
                ))}

                <Button
                  type="submit"
                  disabled={isLoading}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-2 border-t-white mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
