"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Book } from "@/types";

interface Book3DProps {
  book: Book;
}

export default function Book3D({ book }: Book3DProps) {
  const bookRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bookRef.current) return;

    const bookEl = bookRef.current;
    const hitbox = bookEl.querySelector(".books__hitbox") as HTMLElement;
    const bookImage = bookEl.querySelector(".books__image") as HTMLElement;
    const bookEffect = bookEl.querySelector(".books__effect") as HTMLElement;
    const pages = bookEl.querySelectorAll(".books__page");
    const bookLight = bookEl.querySelector(".books__light") as HTMLElement;

    gsap.registerPlugin(CustomEase);
    CustomEase.create("bookEase", "0.25, 1, 0.5, 1");

    gsap.set(bookImage, {
      boxShadow:
        "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)",
    });
    gsap.set(bookLight, { opacity: 0.1, rotateY: 0 });
    gsap.set(pages, { x: 0 });

    const hoverIn = gsap.timeline({ paused: true });

    hoverIn.to(
      bookImage,
      {
        duration: 0.7,
        rotateY: -12,
        translateX: -6,
        scaleX: 0.96,
        boxShadow:
          "10px 10px 20px rgba(0,0,0,0.25), 20px 20px 40px rgba(0,0,0,0.2), 40px 40px 60px rgba(0,0,0,0.15)",
        ease: "bookEase",
      },
      0
    );

    hoverIn.to(
      bookEffect,
      { duration: 0.7, marginLeft: 10, ease: "bookEase" },
      0
    );

    hoverIn.to(
      bookLight,
      { duration: 0.7, opacity: 0.2, rotateY: -12, ease: "bookEase" },
      0
    );

    if (pages.length) {
      hoverIn.to(pages[0], { x: "4px", duration: 0.7, ease: "power1.inOut" }, 0);
      hoverIn.to(pages[1], { x: "2px", duration: 0.7, ease: "power1.inOut" }, 0);
      hoverIn.to(pages[2], { x: "0px", duration: 0.7, ease: "power1.inOut" }, 0);
    }

    hitbox.addEventListener("mouseenter", () => hoverIn.play());
    hitbox.addEventListener("mouseleave", () => hoverIn.reverse());
  }, [book]);

  return (
    <div className="books__item" ref={bookRef} dir="ltr">
      <div className="books__container">
        <div className="books__cover">
          <div className="books__back-cover"></div>
          <div className="books__inside">
            <div className="books__page"></div>
            <div className="books__page"></div>
            <div className="books__page"></div>
          </div>
          <div className="books__image">
            <img src={book.cover} alt={book.titleEn} />
            <div className="books__effect"></div>
            <div className="books__light"></div>
          </div>
          <div className="books__hitbox"></div>
        </div>
      </div>
    </div>
  );
}
