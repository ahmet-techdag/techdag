import { companies, testimonials } from "@/data";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export const Clients = () => {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                Memnun müşterilerden
                <span className="text-purple"> Nazik sözler</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
                <div className="max-lg: mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16">
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
                            <img src={img} alt={name} className="w-5 md:w-10" />
                            <img src={nameImg} alt={name} className="w-5 md:w-20" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
