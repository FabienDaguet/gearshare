import type { FooterSection } from "../types/FooterTypes";

const footerSections: FooterSection[] = [
  {
    title: "Explore",
    links: ["Categories", "News"]
  },
  {
    title: "Trust",
    links: ["Reviews", "Help", "conditions of use"]
  },
  {
    title: "Owners",
    links: ["Bests Owners", "Online Owners"]
  },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footerContainer">
          <div>
            <div className="footerBrand-title">GearShare Canada</div>
            <p className="footerBrand-description">Louer du matériel localement, économiser, réduire le gaspillage et simplifier les projets.</p>
          </div>
          {footerSections.map((section,key) => 
            <div key={key}>
              <div className="footerSectionTitle">
                {section.title}
              </div>
              <div className="footerLinks">
                {section.links.map((link, key) => 
                  <span key={key}>
                    {link}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </footer>
    </>
  )
}
export default Footer;