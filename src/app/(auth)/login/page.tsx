"use client";

import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import clsx from "clsx";
import SelectFlagInput from "@/components/uicomp/selectFlagInput";

// Define types for form inputs
interface LoginFormInputs {
  phone: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  // Define the schema for validation using Yup
  const schema = yup.object().shape({
    phone: yup.string().required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // Define the type of the response data from the API
  interface LoginResponse {
    access: string;
    // Add more fields if the API response contains additional data
  }

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      await axios.post<LoginResponse>(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        data
      );
      // Set token if needed (e.g., using cookies or localStorage)
      // Cookies.set("authToken", response.data.access);
      router.push("/dashboard");
      toast.success("Logged in successfully");
    } catch (error) {
      console.log(error);
      toast.error("Email or Password is incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        className=" border border-gray-300 sm:w-2/5 p-20 mt-10 rounded-lg  md:w-[631px] md:h-[576px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col w-full h-full justify-between ">
          <div className="text-center">
            <h2 className="text-3xl font-medium">تسجيل دخول</h2>
          </div>

          <div className="flex flex-col gap-4 relative">
            <label htmlFor="phone"> رقم الهاتف</label>

            <div className="flex gap-2">
              <SelectFlagInput />
              <input
                type="text"
                id="phone"
                // placeholder="nouran@cyparta.com"
                className="border border-gray-300 rounded-lg p-2 h-[55px] flex-grow-1 w-full"
                {...register("phone")}
              />
            </div>
            {errors.phone && (
              <p className="text-red-600 absolute top-full left-0">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col  gap-4 relative">
            <label htmlFor="password">كلمة المرور</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="border border-gray-300 rounded-lg p-2 h-[55px]"
              placeholder="***********"
              {...register("password")}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute left-2 top-[50px] translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <IoEyeOffOutline size={18} className="text-gray-400" />
              ) : (
                <IoEyeOutline size={18} className="text-gray-400" />
              )}
            </span>
            {errors.password && (
              <p className="text-red-600 absolute top-full left-0">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-start">
            <p className="text-[#3162DA] ">نسيت كلمة المرور؟</p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <input
              type="submit"
              disabled={loading}
              value="Login"
              className={clsx(
                "bg-[#3162DA] text-white rounded-[100px] p-2 h-[55px] w-full cursor-pointer",
                loading && "opacity-50 cursor-not-allowed"
              )}
            />
          </div>
        </div>
        <h5 className="mt-3 ">
          {" "}
          ليس لديك حساب ؟<span className=""> انشاء حساب جديد</span>
        </h5>
      </form>
    </div>
  );
};

export default Login;
