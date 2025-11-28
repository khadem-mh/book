"use client";

import { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";

interface BaseModalProps {
    title?: string;
    trigger?: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean; // از parent کنترل میشه
    onOpenChange?: (isOpen: boolean) => void; // والد اطلاع میگیره
    footerButtons?: React.ReactNode;
}

export default function BaseModal({
    title = "Modal Title",
    trigger,
    children,
    isOpen: controlledIsOpen,
    onOpenChange,
    footerButtons,
}: BaseModalProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    const isOpen = controlledIsOpen ?? internalIsOpen;

    const handleOpen = () => {
        if (controlledIsOpen === undefined) setInternalIsOpen(true);
        onOpenChange?.(true);
    };

    const handleClose = () => {
        if (controlledIsOpen === undefined) setInternalIsOpen(false);
        onOpenChange?.(false);
    };

    return (
        <>
            {/* فقط اگر trigger داده شده و مودال کنترل نشده است */}
            {!controlledIsOpen && trigger && (
                <div onClick={handleOpen}>{trigger}</div>
            )}
            <Modal isOpen={isOpen} onOpenChange={handleClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>{children}</ModalBody>
                            <ModalFooter>
                                {footerButtons || (
                                    <>
                                        <Button color="danger" variant="light" onPress={handleClose}>
                                            لغو
                                        </Button>
                                        <Button color="primary" onPress={handleClose}>
                                            ثبت
                                        </Button>
                                    </>
                                )}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
