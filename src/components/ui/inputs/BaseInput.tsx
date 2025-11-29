"use client";

import { Input } from "@heroui/react";

interface BaseInputProps {
    label: string;
    value: string;
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
}

export default function BaseInput({
    label,
    value,
    placeholder,
    className,
    onChange
}: BaseInputProps) {
    return (
        <Input
            label={label}
            value={value}
            labelPlacement="outside"
            placeholder={placeholder}
            className={className}
            onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        />
    );
}
