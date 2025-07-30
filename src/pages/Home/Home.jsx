import { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import {
  FaLightbulb,
  FaHandshake,
  FaTools,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";

import LandingSection from "../../components/LandingSection/LandingSection";
import Partener from "../../components/Partener/Partener";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Functionality from "../../components/Functionality/Functionality";
import ContactSection from "../../components/ContactSection/ContactSection";

import "./Home.css";

export default function Home() {
  const [visibleArrows, setVisibleArrows] = useState([]);
  const [disappearedIcons, setDisappearedIcons] = useState([]);
  const [showFinalCircle, setShowFinalCircle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newVisible = [];

      if (scrollY > 100) newVisible.push("arrow1");
      if (scrollY > 800) newVisible.push("arrow2");
      if (scrollY > 1400) newVisible.push("arrow3");
      if (scrollY > 3500) newVisible.push("arrow4");

      setVisibleArrows(newVisible);

     
    
     

      setShowFinalCircle(scrollY > 3500 );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disparition progressive après chaque flèche
  useEffect(() => {
    visibleArrows.forEach((arrow, index) => {
      const iconId = `icon${index + 1}`;
      if (!disappearedIcons.includes(iconId)) {
        setTimeout(() => {
          setDisappearedIcons((prev) => [...prev, iconId]);
        }, 300); // Delay pour smooth fade
      }
    });

    if (
      visibleArrows.length === 4 &&
      disappearedIcons.length === 4 &&
      !showFinalCircle
    ) {
      setTimeout(() => {
        setShowFinalCircle(true);
      }, 800); // Délai avant apparition finale
    }
  }, [visibleArrows, disappearedIcons]);

  return (
    <main className="Home">
      <div className="elemnet">
        <ArcherContainer
          key={visibleArrows.join("-")}
          strokeColor="rgba(123, 0, 255, 1)"
          style={{ position: "absolute", width: "100%", height: "100%", top: 0 }}
        >
          <div className="section-list">
            {/* ICON 1 */}
            <ArcherElement
              id="icon1"
              relations={
                visibleArrows.includes("arrow1")
                  ? [{ targetId: "icon2", targetAnchor: "top", sourceAnchor: "bottom" }]
                  : []
              }
            >
              <div
                className={`icon-wrapper ${disappearedIcons.includes("icon1") ? "disappear" : ""}`}
                style={{ top: 200, left: 50 }}
              >
                <FaLightbulb />
              </div>
            </ArcherElement>

            {/* ICON 2 */}
            <ArcherElement
              id="icon2"
              relations={
                visibleArrows.includes("arrow2")
                  ? [{ targetId: "icon3", targetAnchor: "top", sourceAnchor: "bottom" }]
                  : []
              }
            >
              <div
                className={`icon-wrapper ${disappearedIcons.includes("icon2") ? "disappear" : ""}`}
                style={{ top: 870, right: 50 }}
              >
                <FaHandshake />
              </div>
            </ArcherElement>

            {/* ICON 3 */}
            <ArcherElement
              id="icon3"
              relations={
                visibleArrows.includes("arrow3")
                  ? [{ targetId: "icon4", targetAnchor: "top", sourceAnchor: "bottom" }]
                  : []
              }
            >
              <div
                className={`icon-wrapper ${disappearedIcons.includes("icon3") ? "disappear" : ""}`}
                style={{ top: 1300, left: 50 }}
              >
                <FaTools />
              </div>
            </ArcherElement>

            {/* ICON 4 */}
            <ArcherElement
              id="icon4"
              relations={
                visibleArrows.includes("arrow4")
                  ? [{ targetId: "icon5", targetAnchor: "top", sourceAnchor: "bottom" }]
                  : []
              }
            >
              <div
                className={`icon-wrapper ${disappearedIcons.includes("icon4") ? "disappear" : ""}`}
                style={{ top: 2400, right: 50 }}
              >
                <FaCogs />
              </div>
            </ArcherElement>

            {/* LAST ICON */}
            <ArcherElement id="icon5">
              <div className="icon-wrapper" style={{ top: 4120, left: "50%",right: "50%", transform: "translate(-50%, -50%)" }}>
                <FaEnvelope />
              </div>
            </ArcherElement>

            {/* FINAL CIRCLE REVEAL */}
            {showFinalCircle && (
     <>
              <div className="circle-icons1">
                <div className="circle-item item1" >
                  <FaLightbulb />
                </div>
                <div className="circle-item item2" >
                  <FaHandshake />
                </div>
             
              </div>
              <div className="circle-icons2">
               
                <div className="circle-item item3" >
                  <FaTools />
                </div>
                <div className="circle-item item4" >
                  <FaCogs />
                </div>
              </div>
              </>
            )}
          </div>
        </ArcherContainer>
      </div>

      {/* Sections */}
      <LandingSection />
      <Partener />
      <ServiceSection />
      <Functionality />
      <ContactSection />
    </main>
  );
}
