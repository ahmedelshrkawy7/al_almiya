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
import axiosInstance from "@/lib/api/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  full_name: yup.string().required("الاسم مطلوب"),
  phone: yup.string().required("رقم الهاتف مطلوب"),
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
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    axiosInstance
      .post("login", data)
      .then((res) => {
        toast.success("تم تسجيل الدخول بنجاح");
        router.push("/website"); // Navigate to /website
      })
      .catch((error) => {
        console.error("Login Error:", error);
        toast.error("حدث خطأ أثناء تسجيل الدخول");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-xl shadow-lg rounded-[32px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            إنشاء حساب جديد
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="">
                الاسم
              </Label>
              <div className="relative mt-3">
                <Input
                  id="name"
                  placeholder="أحمد"
                  className="pr-10 text-right "
                  {...register("full_name")}
                />
                <User className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              {errors.full_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <Label htmlFor="phone" className="">
                رقم الهاتف
              </Label>
              <div className="relative flex gap-3 mt-3">
                <SelectFlagInput control={control} />
                <Input
                  id="phone"
                  placeholder="123456789"
                  className="rounded-r-md text-right"
                  {...register("phone")}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">كلمة المرور</Label>
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

            {/* Confirm Password Field */}
            <div>
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
              <div className="relative mt-3">
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </span>
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pr-10 text-right"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-[55px]"
            >
              إنشاء حساب جديد
            </Button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-sm text-center">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              تسجيل دخول
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
