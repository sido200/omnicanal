import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./Home.css";
import ContactSection from "../../components/ContactSection/ContactSection";
import Functionality from "../../components/Functionality/Functionality";
import LandingSection from "../../components/LandingSection/LandingSection";
import Partener from "../../components/Partener/Partener";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const ballRef = useRef(null);

  useEffect(() => {
    const path = [
      { x: window.innerWidth - 10, y: 0 }, // Départ haut-droit
      { x: 10, y: window.innerHeight / 10 }, // Diagonal vers gauche
      { x: window.innerWidth - 10, y: window.innerHeight / 7 }, // Retour droit
      { x: 10, y: (3 * window.innerHeight) / 5 }, // Diagonal vers gauche
      { x: window.innerWidth - 10, y: window.innerHeight / 4 }, // Fin bas-droit
    ];

    const animation = gsap.to(ballRef.current, {
      motionPath: {
        path: path,
        curviness: 1.5,
      },
      duration: 10,
      ease: "power1.inOut",
      paused: true,
      onUpdate: () => {
        const progress = animation.progress();
        if (progress <= 0.1) ballRef.current.style.backgroundColor = "red";
        else if (progress <= 0.2)
          ballRef.current.style.backgroundColor = "purple";
        else if (progress <= 0.3)
          ballRef.current.style.backgroundColor = "blue";
        else if (progress <= 0.5)
          ballRef.current.style.backgroundColor = "orange";
        else ballRef.current.style.backgroundColor = "yellow";
      },
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollPosition / maxScroll;
      animation.progress(Math.min(progress, 1)); // Limite à 1 pour éviter les erreurs
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appelle une fois au montage pour position initiale
    return () => {
      window.removeEventListener("scroll", handleScroll);
      animation.kill();
    };
  }, []);

  return (
    <main className="Home">
      <div className="bouncing-ball" ref={ballRef}></div>
      <LandingSection />
      <Partener />
      <ServiceSection />
      <Functionality />
      <ContactSection />
    </main>
  );
}
