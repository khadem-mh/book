"use client"

import BaseModal from "@/components/ui/BaseModal";
import { Input, Link, Button } from "@heroui/react";
import { useState } from "react";

const LoginForm = () => {
    const [mode, setMode] = useState<"login" | "sign-up">("login"); // حالت پیشفرض ورود

    return (
        <BaseModal
            /*   title={mode === "login" ? "سلام! خوش برگشتی" : "شروع یه ماجراجویی جدید"} */
            title=""
            trigger={
                <div>ورود | عضویت</div>
            }
            footerButtons={<></>}
        >
            <div className="flex flex-col w-full">
                {mode === "login" ? (
                    <form className="flex flex-col gap-4">
                        <Input isRequired label="ایمیل" placeholder="ایمیل خود را وارد کنید" type="email" />
                        <Input
                            isRequired
                            label="رمز عبور"
                            placeholder="رمز عبور خود را وارد کنید"
                            type="password"
                        />
                        <p className="text-center text-small">
                            حساب کاربری ندارید؟{" "}
                            <Link size="sm" onPress={() => setMode("sign-up")}>
                                ثبت نام
                            </Link>
                        </p>
                        <div className="flex gap-2 justify-end">
                            <Button fullWidth color="primary">
                                ورود
                            </Button>
                        </div>
                    </form>
                ) : (
                    <form className="flex flex-col gap-4">
                        <div className="relative w-full flex items-center justify-around gap-6">
                            {/* دایره رنگی blur و absolute */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-500 rounded-full filter blur-2xl opacity-50 animate-pulse"></div>

                            {/* متن اصلی */}
                            <div className="flex flex-col items-center justify-center text-center z-10">
                                <p className="font-semibold text-lg">آماده ای بریم!!؟</p>
                                <p className="text-sm text-gray-600 animate-pulse">
                                    شروع یه ماجراجویی متفاوت و جدید
                                </p>
                            </div>

                            {/* تصویر کنار */}
                            <img
                                src="/images/register.png"
                                alt="register"
                                className="w-20 animate-bounce z-10"
                                style={{ animationDuration: "5000ms" }}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Input labelPlacement="outside" isRequired label="نام" placeholder="نام خود را وارد کنید" type="text" />
                            <Input labelPlacement="outside" isRequired label="نام خوانوادگی" placeholder="نام خوانوادگی خود را وارد کنید" type="text" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Input labelPlacement="outside" isRequired label="ایمیل" placeholder="example@gmail.com" type="email" dir="ltr" />
                            <Input
                                labelPlacement="outside"
                                isRequired
                                label="رمز عبور"
                                placeholder="@Ai_1234"
                                type="password"
                                dir="ltr"
                            />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <Button fullWidth color="primary" variant="flat">
                                ثبت نام
                            </Button>
                        </div>
                        <p className="text-center text-small">
                            قبلاً ثبت نام کرده‌اید؟{" "}
                            <Link size="sm" onPress={() => setMode("login")}>
                                ورود
                            </Link>
                        </p>
                    </form>
                )}
            </div>
        </BaseModal>
    );
}

export default LoginForm
