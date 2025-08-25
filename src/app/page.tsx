

import Contact from "@/components/contact/contact";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import About from "@/components/pages/about/about";
import Education from "@/components/pages/education/education";
import Experience from "@/components/pages/experience/experience";
import Hero from "@/components/pages/hero/hero";
import Projects from "@/components/pages/project/project";
import Skills from "@/components/pages/skills/skills";

export default function Page() {
  return (
    <>
      {/* <Navbar/> */}
      <main className="flex flex-col min-h-screen pt-20">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        Later: <section id="contact"><Contact/></section>
      </main>
      {/* <Footer/> */}
    </>
  );
}
