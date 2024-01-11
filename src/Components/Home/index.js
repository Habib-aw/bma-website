import "./home.css";
import Classes from "../Classes";
import Updates from "../Updates";
import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import maktab from "../../Assets/Home/Carousel/Quran.jpg";
import donate from "../../Assets/Home/Carousel/makkah.jpg";
import admin from "../../Assets/Home/Carousel/admin.jpg";
import oldMaktab from "../../Assets/Home/Carousel/2009.jpg";
import certificates from "../../Assets/Home/Carousel/certificates.jpg";
function Home({ times }) {
  const carouselAssets = [
    [
      "Baitul Mamur Maktab",
      "Monday to Thursday 5-7, ages 5-14",
      "Learning the basics of Islam",
      "Register below or contact the masjid",
      maktab,
    ],
    [
      "Donate",
      "Please donate generously towards Allah" + "'s" + " house",
      "The masjid runs on the support of the people",
      "Help us by contributing",
      donate,
    ],
    ["Maktab pictures", "Of Baitul Mamur Academy", "Admin", "", admin],
    [
      "Maktab pictures",
      "Of Baitul Mamur Academy",
      "Certificates",
      "Awarded to exceeding students",
      certificates,
    ],
    [
      "Maktab pictures",
      "Of Baitul Mamur Academy",
      "Maktab in 2009",
      "",
      oldMaktab,
    ],
  ];
  useEffect(() => {
    document.title = "Baitul Mamur Academy";
  }, []);
  return (
    <div>
      <div className="timesWrapper">
        <div>
          <h4>&nbsp;</h4>
          <span className="times">Start</span>
          <span className="times">Jama'ah</span>
        </div>
        <div>
          <h4>Fajr</h4>
          <span className="times">{times.Fajr_start}</span>
          <span className="times">{times.Fajr_jamaah}</span>
        </div>
        <div>
          <h4>Zuhr</h4>
          <span className="times">{times.Zuhr_start}</span>
          <span className="times">{times.Zuhr_jamaah}</span>
        </div>
        <div>
          <h4>Asr</h4>
          <span className="times">{times.Asr_start1}</span>
          <span className="times">{times.Asr_jamaah}</span>
        </div>
        <div>
          <h4>Maghrib</h4>
          <span className="times">{times.Maghrib_start}</span>
          <span className="times">{times.Maghrib_jamaah}</span>
        </div>
        <div>
          <h4>Isha</h4>
          <span className="times">{times.Isha_start}</span>
          <span className="times">{times.Isha_jamaah}</span>
        </div>
        <div>
          <h4>Sunrise</h4>
          <span className="times">{times.Sunrise}</span>
          <span className="times">-</span>
        </div>
      </div>
      <Carousel fade>
        {carouselAssets.map((item, key) => {
          return (
            <Carousel.Item id={key}>
              <div className="carouselItems">
                <div className="circleWrapper">
                  <div class="semiCircle">
                    <section className="cText">
                      <div>
                        <h1>{item[0]}</h1>
                        <h3>{item[1]}</h3>
                      </div>
                      <div>
                        <h4>{item[2]}</h4>
                        <h6>{item[3]}</h6>
                      </div>
                    </section>
                  </div>

                  <div class="semiCircleLine1"></div>
                  <div class="semiCircleLine2"></div>
                </div>
                <img src={item[4]} alt="" srcset="" className="carouselImg" />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Updates />
      <Classes />
    </div>
  );
}

export default Home;
