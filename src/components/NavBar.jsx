import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

export default function NavBar() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    tl.fromTo(
      "nav",
      { background: "transparent" },
      {
        background: "#00000050",
        backgroundfilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <>
      <nav className="flex  justify-between items-center just fixed  w-full  z-50 py-5 px-[5rem] flex-wrap max-[622px]:justify-center ">
        <a href="#home" className="flex items-center gap-5">
          <img src="/Images/logo.png" />
          <p className="font-modern-negra text-3xl">Velvet Pour</p>
        </a>
        <ul className="flex gap-6 ">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="flex items-center text-sm">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
