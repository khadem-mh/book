"use client";

import { Select, SelectItem } from "@heroui/react";

export type BaseOption = {
  key: string;
  label: string;
};

interface BaseSelectProps {
  label: string;
  className?: string;
  placeholder?: string;
  options: BaseOption[];
  selectedKey?: string;
  onChange?: (key: string) => void;
}

export default function BaseSelect({
  label,
  placeholder,
  options,
  className,
  selectedKey,
  onChange
}: BaseSelectProps) {
  return (
    <Select
      className={className}
      labelPlacement="outside"
      label={label}
      placeholder={placeholder}
      selectedKeys={selectedKey ? [selectedKey] : undefined}
      onSelectionChange={(keys) =>
        onChange?.(Array.from(keys)[0] as string)
      }
    >
      {options.map((opt) => (
        <SelectItem key={opt.key}>{opt.label}</SelectItem>
      ))}
    </Select>
  );
}
