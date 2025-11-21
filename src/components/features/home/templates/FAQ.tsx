"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import React from "react";

export type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  title?: string;
  items: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ title = "سوالات متداول", items }) => {
  return (
    <section className="max-w-7xl mx-auto mt-16">
      <h3 className="text-3xl font-bold text-right mb-8">{title}</h3>

      <Accordion
        variant="splitted"
        className="rtl"
        itemClasses={{
          base: "rounded-2xl my-0.5 shadow-sm border border-gray-200",
          title: "font-bold text-right cursor-pointer",
          content: "text-right text-gray-600 leading-7",
        }}
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index + 1}
            aria-label={`faq-${index}`}
            title={item.q}
          >
            {item.a}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
