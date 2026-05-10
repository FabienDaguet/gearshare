import tente from "../assets/images/tente.jpg";
import Icon from "../components/ui/Icons";

const Home = () => {
  return (
    <>
      <section className="intro-section">
        <div className="intro-container">
          <div>
            <div className="intro-badge">
              Disconnected
            </div>
            <div className="intro-title">
              Rent the right equipment, close to home.
            </div>
            <div className="intro-text">
              Tools, camping, sports, photography, moving: find what you need without buying equipment that will just sit in the garage.
            </div>
            <div className="intro-search">

            </div>
          </div>
            <div className="introAd">
              <img src={tente} alt="tente" className="introAd-img"/>
              <div className="introAd-pill">
                <div className="introAd-pill_iconBox">
                  <Icon name="check" size={24}/>
                </div>
                <div>
                  <div className="introAd-pill_price">50 $ Saved</div>
                  <div className="introAd-pill_text">On a camping rental</div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
export default Home