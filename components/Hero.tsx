import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="md-top-20 -left-10 -top-40 h-screen md:-left-32" fill="white" />
                <Spotlight className="left-full top-10 h-[80vh] w-[50vw] md:-left-32" fill="purble" />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50wv]" fill="blue" />
            </div>

            <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.3] dark:bg-black-100 dark:bg-grid-white/[0.1]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
            </div>

            <div className="relative z-10 my-20 flex justify-center">
                <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
                    <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">NEXT.JS İLE DİNAMİK WEB SİHRİ</h2>

                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Konseptleri Kusursuz Kullanıcı Deneyimlerine Dönüştürme" />
                    <p className="mb-4 text-center text-lg md:tracking-wider lg:text-2xl">Merhaba, ben Ahmet, Türkiye'de yaşayan bir Next.js geliştiricisiyim..</p>
                    <a href="#about">
                        <MagicButton title="Çalışmalarımı gör" icon={<FaLocationArrow />} position="right" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
