import "./bestdestinations.css";
import pragliding from "./assets/paragliding.jpg";
import pragliding2 from "./assets/paragliding2.jpg";
import img1 from "./assets/img1.jpg";
import bali from "./assets/bali.jpg";
import dubai from "./assets/dubai.jpg";

function BestDestination() {
  return (
    <>
      <div className="headerdetinations" id="headerdetinations">
        <p className="best">Best Place Destinations</p>
        <br />
      </div>
      <div className="belowheader">
        <p className="we">
          We provide some very affordable prices compared to others
        </p>
      </div>
      <div className="picururedestination">
        <div className="france">
          <img src={pragliding} alt="" />
          <div className="caption">
            <p>France</p>
            <p>Enchanting France Awaits</p>
          </div>
        </div>
        <div className="Indonesia">
          <img src={img1} alt="" />
          <div className="caption">
            <p>Indonesia</p>
            <p>Enchanting Indonesia Thrive</p>
          </div>
        </div>
        <div className="bali">
          <img src={bali} alt="" />
          <div className="caption">
            <p>Bali</p>
            <p>Blissful Bali Escapes</p>
          </div>
        </div>
        <div className="dubai">
          <img src={dubai} alt="" />
          <div className="caption">
            <p>Dubai</p>
            <p>Discover Dazzling Dubai</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestDestination;
