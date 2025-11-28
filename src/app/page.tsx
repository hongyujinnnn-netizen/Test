// page.tsx (Updated Code)

// 'use client';
import Image from "next/image";
// import Header from "../components/navbar/navbar"; // Removed: Redundant
import Navbar from "../components/navbar/navbar";
// import Expressions from "../components/Expressions/expressions"; // Removed: Expressions should be a separate route
// import { use } from "react"; // Removed: Unused
import type { ReactElement } from "react";
import Expressions from "../components/Expressions/expressions";
import PhrasalVerbs from "../components/Expressions/phrasalVerbs";
import EnglishCollocations from "../components/Expressions/englishCollocations";

export default function Home() {
  const nativeLanguages = [
    // ... nativeLanguages array remains the same
    { name: "English", flag: "https://flagcdn.com/48x36/gb.png" },
    { name: "français", flag: "https://flagcdn.com/48x36/fr.png" },
    { name: "español", flag: "https://flagcdn.com/48x36/es.png" },
    { name: "Türkçe", flag: "https://flagcdn.com/48x36/tr.png" },
    { name: "italiano", flag: "https://flagcdn.com/48x36/it.png" },
    { name: "русский", flag: "https://flagcdn.com/48x36/ru.png" },
    { name: "українська", flag: "https://flagcdn.com/48x36/ua.png" },
    { name: "Tiếng Việt", flag: "https://flagcdn.com/48x36/vn.png" },
    { name: "हिन्दी", flag: "https://flagcdn.com/48x36/in.png" },
    { name: "العربية", flag: "https://flagcdn.com/48x36/sa.png" },
    { name: "Filipino", flag: "https://flagcdn.com/48x36/ph.png" },
    { name: "فارسی", flag: "https://flagcdn.com/48x36/ir.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/48x36/id.png" },
    { name: "Deutsch", flag: "https://flagcdn.com/48x36/de.png" },
    { name: "português", flag: "https://flagcdn.com/48x36/pt.png" },
    { name: "日本語", flag: "https://flagcdn.com/48x36/jp.png" },
    { name: "中文", flag: "https://flagcdn.com/48x36/cn.png" },
    { name: "한국어", flag: "https://flagcdn.com/48x36/kr.png" },
    { name: "polski", flag: "https://flagcdn.com/48x36/pl.png" },
    { name: "Ελληνικά", flag: "https://flagcdn.com/48x36/gr.png" },
    { name: "বাংলা", flag: "https://flagcdn.com/48x36/bd.png" },
    { name: "Nederlands", flag: "https://flagcdn.com/48x36/nl.png" },
    { name: "svenska", flag: "https://flagcdn.com/48x36/se.png" },
    { name: "čeština", flag: "https://flagcdn.com/48x36/cz.png" },
    { name: "română", flag: "https://flagcdn.com/48x36/ro.png" },
    { name: "magyar", flag: "https://flagcdn.com/48x36/hu.png" },
  ];

  
  
  return (
    <EnglishCollocations/>
  );
}