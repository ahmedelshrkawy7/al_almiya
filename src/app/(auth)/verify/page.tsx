"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import axiosInstance from "@/lib/api/axiosInstance";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const schema = yup.object({
  otp: yup
    .string()
    .matches(/^\d{4}$/, "يجب أن يكون الكود 4 أرقام")
    .required("الرجاء إدخال الكود المرسل"),
});

export default function OTPVerificationForm() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { otp: "" },
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    setLoading(true);
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
    <div className="flex items-center justify-center h-screen bg-gray-50">
      {/* Main Card */}
      <Card className="w-full max-w-2xl p-12 rounded-[32px] shadow-lg">
        <CardHeader className="text-center p-10">
          <CardTitle className="text-3xl font-bold">تأكيد الهوية</CardTitle>
          <p className="text-gray-500 text-lg !mt-10">
            ادخل الكود المرسل إلى رقم الهاتف
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* OTP Inputs */}
            <div className="flex flex-col justify-center gap-2 items-center">
              <label htmlFor="" className="text-start w-full mb-3">
                <Link href="#" className="text-blue-500 text-sm text-start  ">
                  تعديل رقم الهاتف
                </Link>
              </label>
              <Controller
                name="otp"
                control={control}
                render={({ field }) => (
                  <InputOTP
                    maxLength={4}
                    value={field.value}
                    onChange={field.onChange}
                    className="flex gap-4 justify-center"
                  >
                    <InputOTPGroup className="flex justify-between w-full gap-14">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="w-16 h-16 text-2xl text-center border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                )}
              />
            </div>
            {errors.otp && (
              <p className="text-red-500 text-sm text-center">
                {errors.otp.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                disabled={loading}
                className={`w-full rounded-full h-[55px] text-lg font-bold ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {loading ? "جاري الإرسال..." : "إرسال"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
