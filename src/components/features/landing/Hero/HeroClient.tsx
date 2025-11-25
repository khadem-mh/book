"use client"

import { Button } from "@heroui/react"
import { MdArrowForwardIos } from "react-icons/md"

const HeroClient = () => {

    return (
        <>
            <Button variant="bordered">ورود / ثبت‌نام</Button>
            <Button
                color="primary"
                variant="light"
                endContent={<MdArrowForwardIos className="text-sm scale-x-[-1]" />}
            >
                همه کتاب‌ها
            </Button>
        </>
    )
}

export default HeroClient