"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User } from "lucide-react";
import SelectFlagInput from "@/components/uicomp/SelectFlagInput";
import Link from "next/link";

const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  phone: yup
    .string()
    .matches(/^\d{9}$/, "رقم الهاتف يجب أن يحتوي على 9 أرقام")
    .required("رقم الهاتف مطلوب"),
  password: yup
    .string()
    .min(6, "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "كلمة المرور غير متطابقة")
    .required("تأكيد كلمة المرور مطلوب"),
});

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-xl shadow-lg rounded-[32px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            تسجيل الدخول
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="font-bold">
                كلمة المرور
              </Label>
              <div className="relative mt-3">
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pr-10 text-right mt-3"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="font-bold">
                {" "}
                تأكيد كلمه المرور
              </Label>
              <div className="relative mt-3">
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pr-10 text-right mt-3"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-[55px] rounded-[100px] text-xl !mt-8 font-bold"
            >
              تأكيد
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
