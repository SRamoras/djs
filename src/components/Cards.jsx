import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Cards.css";
import One from "/images/1.webp";
import Two from "/images/2.webp";
import Tree from "/images/3.webp";
import Four from "/images/4.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import GradientButton from "./GradientButton";




const ScrollComponent = () => {
  const textCardsRef = useRef(null);
  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    const lines = textCardsRef.current.querySelectorAll(".line");
    gsap.fromTo(
      lines,
      { y: 20, filter: "blur(5px)", opacity: 0 },
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: lines[0], // usa o primeiro elemento com .line como trigger
          start: "top 80%",
        
        }
      }
    );

    // Cria o ScrollTrigger para fixar o container-text-cards
    ScrollTrigger.create({
      trigger: ".scroll-section",
      start: "top 100px", // mesmo ponto de início da animação dos cards
      end: () => {
        // Calcula o fim com base na quantidade de items (cards)
        const items = document.querySelectorAll(".scroll-section .item");
        return `+=${items.length * 100}%`;
      },
      pin: ".container-text-cards",
      pinSpacing: false,
 
    });
  
    const scrollSections = document.querySelectorAll(".scroll-section");
    scrollSections.forEach((section) => {
      const wrapper = section.querySelector(".wrapper");
      const items = wrapper.querySelectorAll(".item");
  
      let direction = null;
      if (section.classList.contains("vertical-section")) {
        direction = "vertical";
      } else if (section.classList.contains("horizontal-section")) {
        direction = "horizontal";
      }
  
      initScroll(section, items, direction);
    });
  
    function initScroll(section, items, direction) {
      items.forEach((item, index) => {
        if (index !== 0) {
          direction === "horizontal"
            ? gsap.set(item, { xPercent: 100 })
            : gsap.set(item, { yPercent: 100 });
        }
      });
  
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top 100px", // quando o topo do section estiver a 100px do topo da viewport
          end: () => {
            return `+=${items.length * 100}%`;
          },
          scrub: 1,
          invalidateOnRefresh: true,
      
        },
        defaults: { ease: "none" },
      });
  
      items.forEach((item, index) => {
        timeline.to(item, {
          scale: 0.9,
          borderRadius: "55px",
        });
        if (items[index + 1]) {
          direction === "horizontal"
            ? timeline.to(items[index + 1], { xPercent: 0 }, "<")
            : timeline.to(items[index + 1], { yPercent: 0 }, "<");
        }
      });
    }
  
    // Cleanup: mata todos os ScrollTriggers ao desmontar o componente
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf("*");
    };
  }, []);
  



  return (
    <main className="main-wrapper">
 <div className="container-text-cards" ref={textCardsRef}>
        <h1 className="line">Innovate. Capture. Soar.</h1>
        <h2 className="line">Discover Our Latest Innovations</h2>
        <p className="line">
          Explore our range of cutting-edge products designed to empower your creative journey. The OSMO MOBILE 7 SERIES offers superior stabilization for mobile videography, while the OSMO ACTION 5 PRO is built for capturing extreme action. With the versatile DJI FLIP, unleash your creative potential, and check out our guide on "How to choose a drone" for expert tips on making the perfect selection.
        </p>
      </div>
      {/* Seção de Scroll Vertical */}
      <section className="scroll-section vertical-section section">
  <div className="wrapper">
    <div role="list" className="list">
      
      <div role="listitem" className="item">
        <div className="item_content">
          <div className="item_midle_content">
            <h2>DJI FLIP</h2>
            <div className="item_category">
              <span className="item_category_tag">Nature</span>
              <span className="item_category_tag">Conservation</span>
              <span className="item_category_tag">Sustainability</span>
            </div>
            <p className="item_p">
              Explore innovative design and performance with the DJI FLIP. Discover key insights to elevate your aerial photography and videography experience.
            </p>
          </div>
          <GradientButton>
        VIEW MORE
      </GradientButton>
        </div>
        <img className="item_media" src={One} alt="" />
      </div>
      
      <div role="listitem" className="item">
        <div className="item_content">
          <div className="item_midle_content">
            <h2>OSMO ACTION 5 PRO</h2>
            <div className="item_category">
              <span className="item_category_tag">Nature</span>
              <span className="item_category_tag">Conservation</span>
              <span className="item_category_tag">Sustainability</span>
            </div>
            <p className="item_p">
              Experience the perfect fusion of style and functionality with the OSMO ACTION 5 PRO. Uncover tips for capturing breathtaking action shots and smooth footage.
            </p>
          </div>
          <GradientButton>
        VIEW MORE
      </GradientButton>
        </div>
        <img className="item_media" src={Two} alt="" />
      </div>
      
      <div role="listitem" className="item">
        <div className="item_content">
          <div className="item_midle_content">
            <h2>OSMO MOBILE 7 SERIES</h2>
            <div className="item_category">
              <span className="item_category_tag">Nature</span>
              <span className="item_category_tag">Conservation</span>
              <span className="item_category_tag">Sustainability</span>
            </div>
            <p className="item_p">
              Embrace advanced stabilization with the OSMO MOBILE 7 SERIES. Learn how its design enhances mobile filmmaking and creative storytelling.
            </p>
          </div>
          <GradientButton>
        VIEW MORE
      </GradientButton>
        </div>
        <img className="item_media" src={Four} alt="" />
      </div>
      
      <div role="listitem" className="item">
        <div className="item_content">
          <div className="item_midle_content">
            <h2>How to choose a drone</h2>
            <div className="item_category">
              <span className="item_category_tag">Nature</span>
              <span className="item_category_tag">Conservation</span>
              <span className="item_category_tag">Sustainability</span>
            </div>
            <p className="item_p">
              Master the art of drone selection with our comprehensive guide. Gain insights into features, performance, and design that cater to your flying needs.
            </p>
          </div>
          <GradientButton>
        VIEW MORE
      </GradientButton>
        </div>
        <img className="item_media" src={Tree} alt="" />
      </div>
    </div>
  </div>
</section>

{/* 

      <section className="section">
        <div className="container-medium">
          <div className="padding-vertical">
            <div className="max-width-large">
              <h1 className="heading">Horizontal Scroll Is Cool!</h1>
            </div>
          </div>
        </div>
      </section>

 
      <section className="scroll-section horizontal-section section">
        <div className="wrapper">
          <div role="list" className="list">
            <div role="listitem" className="item">
              <div className="item_content">
                <h2 className="item_number">1</h2>
                <h2>Wildlife in Action: A Glimpse into Nature’s Daily Drama</h2>
                <p className="item_p">
                  Explore the untouched beauty of forests, mountains, and rivers as we uncover the hidden secrets of nature's most breathtaking landscapes.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/10178127/10178127-uhd_2560_1440_30fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media"
              />
            </div>
            <div role="listitem" className="item">
              <div className="item_content">
                <h2 className="item_number">2</h2>
                <h2>Nature’s Symphony: The Sounds That Heal the Soul</h2>
                <p className="item_p">
                  Immerse yourself in the soothing sounds of chirping birds, rustling leaves, and flowing streams – nature's music for peace and tranquility.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/15708463/15708463-uhd_2560_1440_24fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media"
              />
            </div>
            <div role="listitem" className="item">
              <div className="item_content">
                <h2 className="item_number">3</h2>
                <h2>Nature’s Masterpieces: Landscapes That Take Your Breath Away</h2>
                <p className="item_p">
                  Discover stunning views of majestic mountains, endless oceans, and golden sunsets that remind us of nature's artistic brilliance.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/15708462/15708462-uhd_2560_1440_24fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media"
              />
            </div>
            <div role="listitem" className="item">
              <div className="item_content">
                <h2 className="item_number">4</h2>
                <h2>The Power of Nature: How It Shapes Our World</h2>
                <p className="item_p">
                  Dive into the incredible forces of nature – from roaring waterfalls to mighty hurricanes – and see how they sculpt the earth we live on.
                </p>
              </div>
              <video
                src="https://videos.pexels.com/video-files/5788966/5788966-hd_1920_1080_25fps.mp4"
                loading="lazy"
                autoPlay
                muted
                loop
                className="item_media"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="padding-global">
          <div className="container-medium">
            <div className="padding-vertical">
              <div className="max-width-large">
                <h1 className="heading">Soo Cool!!</h1>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default ScrollComponent;
