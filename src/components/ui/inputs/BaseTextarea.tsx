"use client";

import { Textarea } from "@heroui/react";

interface BaseTextareaProps {
    label: string;
    value: string;
    rows?: number;
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
}

export default function BaseTextarea({
    label,
    value,
    rows = 5,
    placeholder,
    className,
    onChange
}: BaseTextareaProps) {
    return (
        <Textarea
            label={label}
            value={value}
            labelPlacement="outside"
            rows={rows}
            placeholder={placeholder}
            className={className}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
