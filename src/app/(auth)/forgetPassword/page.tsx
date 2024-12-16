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
      <Card className="w-full max-w-xl shadow-lg rounded-[32px] p-12">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            هل نسيت كلمة المرور؟
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Phone Field */}
            <div>
              <Label htmlFor="phone" className="">
                رقم الهاتف
              </Label>
              <div className="relative flex gap-3 mt-3">
                <SelectFlagInput />
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

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white h-[55px] rounded-[100px]"
            >
              إرسال
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
