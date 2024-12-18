"use strict";
"use client";
import { React, useEffect, useState, useRef } from "react";
// ICONS
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
// FONTS
import { Prata } from "next/font/google";
import { Alex_Brush } from "next/font/google";
import { Philosopher } from "next/font/google";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Cormorant } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Libre_Baskerville } from "next/font/google";
import { Barlow } from "next/font/google";
import { Carattere } from "next/font/google";
import { Federo } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { Lora } from "next/font/google";
// SERVICES
import Link from "next/link";
import Image from "next/image";
// COMPONENTS
import PurchaseTime from "@/components/PurchaseTime";
import VideoVimeo from "@/components/VideoVimeo";
import { useGlobalContext } from "./context/GlobalContext";
import Footer from "@/components/Footer";

const federo = Federo({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const prata = Prata({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const alex = Alex_Brush({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const philosopher = Philosopher({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppinsHeavy = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const carattere = Carattere({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "italic",
});

const gradientBg = {
  backgroundImage:
    "radial-gradient(circle farthest-corner at -10% 40%, rgba(255, 219, 150, 1) 0%, rgba(2, 2, 2, 1) 30%)",
};

const gradientBg2 = {
  backgroundImage:
    "radial-gradient(circle farthest-corner at 100% 20%, rgba(255, 219, 150, 1) 0%, rgba(2, 2, 2, 1) 16%)",
};

const gradientBg3 = {
  backgroundImage:
    "radial-gradient(circle farthest-corner at 100% 12%, rgba(255, 219, 150, 0.8) 0%, rgba(2, 2, 2, 1) 20%)",
};

export default function Start() {
  const { state, addToCart } = useGlobalContext();
  const carouselRef = useRef(null);
  const carouselRefSec = useRef(null);

  const nameNifEtc = "Raquel Kindlovits. NIF 300297424";
  const address =
    "Rua de Sá da Bandeira, 706 – 2 andar direito, Porto. 4000-267";
  const description =
    "Venda de infoprodutos de planos alimentares para o emagrecimento (bens) e consultoria de nutrição (serviços).";
  const easypaySeller = "Easy Pay – Método Real";
  const delivery =
    "A entrega é realizada por meio virtual, especificamente por e-mail, no ato da compra, de modo gratuito.";
  const privacy =
    "Estes documentos são de uso exclusivo do destinatário e pode ter conteúdo confidencial. Se você não for o destinatário, qualquer uso, cópia, divulgação ou distribuição é estritamente proibida.";
  const prices =
    "Os valores estão inseridos nas opções 1, 2 e 3 (€19,90) e na experiência premium (€9,90). Os valores incluem IVA.";
  const contact = "E-mail: nutri@raquelkin.com. Telefonico: +351 913679602";

  useEffect(() => {
    console.log("state do carrinho em Start:", state);
  }, [state]);

  //----------------Function Components----------------
  function CartIcon({ count }) {
    return (
      <div className="top-6 right-6 text-white p-4 w-14 h-14 shadow-lg transition-all duration-300">
        <ShoppingCartIcon className="h-6 w-6 text-white-800" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
    );
  }

  const [isModalAddCartOpen, setIsModalAddCartOpen] = useState(false);

  const openModalAddCart = () => {
    setIsModalAddCartOpen(true);
  };

  const closeModalAddCart = () => {
    setIsModalAddCartOpen(false);
  };

  const ModalUpgrade = ({ isOpen, onClose }) => {
    return (
      <dialog id="my_modal_6" className="modal custom-modal" open={isOpen}>
        <div className="modal-box custom-modal-box">
          <form method="dialog" className="custom-close-x">
            <button className="custom-close-btn" onClick={onClose}>
              <XMarkIcon className="h-9 w-9" />
            </button>
          </form>
          <PurchaseTime />
        </div>
      </dialog>
    );
  };

  /*
  function Modal6() {
    return (
      <dialog id="my_modal_6" className="modal custom-modal">
        <div className="modal-box custom-modal-box">
          <form method="dialog" className="custom-close-x">
            <button className="custom-close-btn">
              <XMarkIcon className="h-9 w-9" />
            </button>
          </form>
          <PurchaseTime />
        </div>
      </dialog>
    );
  }
  */

  const WhatsAppButton = () => {
    const whatsappLink = "https://wa.me/351913679602"; // Replace with your phone number
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 w-14 h-14 rounded-full shadow-lg transition-all duration-300"
      >
        <Image
          src={"/images/whatsapp.png"}
          layout="fill"
          className="object-cover"
          alt={"wpp"}
        />
      </a>
    );
  };

  const beforeAndAfter = [
    { src: "/images/before-after-1.png", alt: "Dra. Raquel Kindlovits" },
    { src: "/images/before-after-2.png", alt: "Dra. Raquel Kindlovits" },
    { src: "/images/before-after-3.png", alt: "Dra. Raquel Kindlovits" },
    { src: "/images/before-after-4.png", alt: "Dra. Raquel Kindlovits" },
    { src: "/images/before-after-5.png", alt: "Dra. Raquel Kindlovits" },
    { src: "/images/before-after-6.png", alt: "Dra. Raquel Kindlovits" },
  ];

  const testemony = [
    { src: "/images/testem1.png", alt: "Segundo testemunho" },
    { src: "/images/testem2.png", alt: "Terceiro testemunho" },
    { src: "/images/testem3.png", alt: "Quarto testemunho" },
    { src: "/images/testem4.png", alt: "Quinto testemunho" },
    { src: "/images/testem5.png", alt: "Sexto testemunho" },
    { src: "/images/testfree-1.png", alt: "Sétimo testemunho" },
    { src: "/images/testfree-2.png", alt: "Oitavo testemunho" },
  ];

  function CarouselBeforeAfter({ slides }) {
    return (
      <div className="flex flex-col items-center w-[90%] h-96 overflow-hidden rounded-xl mx-auto">
        <Carousel
          className="h-full w-full"
          autoplay={false} // Desative o autoplay se necessário
          loop={true} // Habilite loop se desejar
        >
          {slides.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
      </div>
    );
  };

  function MainCarousel({ slides }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [previousPage, setPreviousPage] = useState(0);
    const [nextPage, setNextPage] = useState(1);
  
    useEffect(() => {
      if (currentImage === 0) {
        setPreviousPage(0);
        setNextPage(currentImage + 1);
      } else if (currentImage === slides.length - 1) {
        setPreviousPage(currentImage - 1);
        setNextPage(slides.length - 1);
      } else {
        setPreviousPage(currentImage - 1);
        setNextPage(currentImage + 1);
      }
    }, [currentImage, slides.length]);
  
    const handleScroll = (direction) => {
      if (carouselRefSec.current) {
        const scrollAmount = carouselRefSec.current.offsetWidth;
        if (direction === "left") {
          carouselRefSec.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        } else {
          carouselRefSec.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    };
  
    return (
      <div id="scrollable-container" className="relative w-[95%] mx-auto">
        <div ref={carouselRefSec} className="carousel flex overflow-x-scroll scroll-smooth items-center relative">
          {slides.map((slide, index) => (
            <div
              id={`item${index}`}
              key={index}
              className="carousel-item w-full flex-shrink-0"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-h-full object-cover"
                style={{
                  border: "7px solid #bb8806",
                }}
              />
            </div>
          ))}
        </div>
        {/* floating arrows */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70"
          style={{ zIndex: 10 }}
        >
          ❮
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70"
          style={{ zIndex: 10 }}
        >
          ❯
        </button>
      </div>
    );
  }

  function AlternativeCarousel({ slides }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [previousPage, setPreviousPage] = useState(0);
    const [nextPage, setNextPage] = useState(1);

    useEffect(() => {
      if (currentImage === 0) {
        setPreviousPage(0);
        setNextPage(currentImage + 1);
      } else if (currentImage === 4) {
        setPreviousPage(currentImage - 1);
        setNextPage(4);
      } else {
        setPreviousPage(currentImage - 1);
        setNextPage(currentImage + 1);
      }
    }, [currentImage]);

    const handleScroll = (direction) => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.offsetWidth;
        if (direction === "left") {
          carouselRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        } else {
          carouselRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    };

    return (
      <div id="scrollable-container" className="w-[95%]">
        <div ref={carouselRef} className="carousel items-center">
          {slides.map((testemunho, index) => (
            <div
              id={`item${index}`}
              key={index}
              className="carousel-item w-[100%]"
            >
              <img
                src={testemunho.src}
                alt={testemunho.alt}
                className="max-h-full object-cover"
                style={{
                  border: "7px solid #bb8806",
                }}
              />
            </div>
          ))}
        </div>
        {/* arrows */}
        <div className="flex justify-center space-x-4 pt-2">
          <button
            onClick={() => handleScroll("left")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              width: "34px",
              height: "34px",
              border: "none",
              background: "#bb8806",
              color: "#000",
            }}
          >
            <>❮</>
          </button>
          <button
            onClick={() => handleScroll("right")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              width: "34px",
              height: "34px",
              border: "none",
              background: "#bb8806",
              color: "#000",
            }}
          >
            <>❯</>
          </button>
        </div>
      </div>
    );
  };

  const CarouselRandomTestimony = () => {
    const testem = [
      { src: "/images/testfree-1.png", alt: "Primeiro testemunho" },
      { src: "/images/testfree-2.png", alt: "Segundo testemunho" },
    ];
    return (
      <div className="flex flex-col items-center w-[100%] overflow-hidden mx-auto">
        <Carousel
          style={{ display: "flex", alignItems: "center" }}
          autoplay={false}
          loop={true}
        >
          {testem.map((testemunho, index) => (
            <div
              // className="max-h-full"
              key={index}
              style={{
                display: "flex",
                border: "7px solid #bb8806",
              }}
            >
              <img
                src={testemunho.src}
                alt={testemunho.alt}
                className="max-h-full max-w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  const BuyButton = ({ color, link, text }) => {
    return (
      <Link href={link}>
        <div
          style={{
            position: "relative", // Allows the pseudo-element to position relative to this div
            borderRadius: "20px",
            padding: "10px 20px",
            fontWeight: 600,
            background: color
              ? `linear-gradient(145deg, ${color}, ${color})`
              : "linear-gradient(145deg, #e6e272, #d3e35f)",
            color: "#000",
            textTransform: "uppercase",
            textAlign: "center",
            transform: "perspective(500px) rotateX(5deg)", // 3D effect
            overflow: "hidden", // Prevents overflow from the pseudo-element
          }}
        >
          <>{text}</>
          <div
            style={{
              content: '""', // For the pseudo-element
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0.2) 100%)",
              animation: "lightMove 2s linear infinite", // 2s light sweep animation
              zIndex: 0, // Make sure the light effect is behind the text
              opacity: 0.5, // Optional: makes the light effect subtler
            }}
          />
        </div>
      </Link>
    );
  };

  /* Slider */
  const PurchaseOptions = () => {
    const productChoiceStyle = {
      position: "relative",
      borderRadius: "20px",
      padding: "10px 20px",
      fontWeight: 600,
      background: "linear-gradient(145deg, #e6e272, #d3e35f)",
      color: "#000",
      textTransform: "uppercase",
      textAlign: "center",
      transform: "perspective(500px) rotateX(5deg)",
      overflow: "hidden",
    };
    const productChoiceFurtherStyle = {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0.2) 100%)",
      animation: "lightMove 2s linear infinite",
      zIndex: 0,
      opacity: 0.5,
    };
    const options = [
      {
        num: 1,
        titulo: "opção 1",
        peso: "50 a 70kg",
        desc: "Perca de 2 a 4kg por mês",
        preco: "19,90",
        precoOrig: "24,90",
        extra: true,
        description: "Plano de 2 a 4kg mês",
        key: "plano-2-a-4",
      },
      {
        num: 2,
        titulo: "opção 2",
        peso: "70 a 90kg",
        desc: "Perca de 4 a 6kg por mês",
        preco: "19,90",
        precoOrig: "24,90",
        extra: true,
        description: "Plano de 4 a 6kg mês",
        key: "plano-4-a-6",
      },
      {
        num: 3,
        titulo: "opção 3",
        peso: "90 a 110kg",
        desc: "Perca de 5 a 7kg por mês",
        preco: "19,90",
        precoOrig: "24,90",
        extra: true,
        description: "Plano de 5 a 7kg mês",
        key: "plano-5-a-7",
      },
    ];
    return (
      <div className="flex flex-col items-center w-[100%] overflow-hidden mx-auto">
        <Carousel
          style={{ display: "flex", alignItems: "center" }}
          autoplay={false}
          loop={true}
        >
          {options.map((option, index) => (
            <div
              key={index}
              id="black-waves-bg"
              className="
                w-full
                flex
                pt-16
                pb-16
                flex-col
                justify-center
                items-center
                gap-y-2
              "
            >
              <div
                style={{
                  fontSize: "3.4rem",
                  letterSpacing: "0.12em",
                  lineHeight: "1.2em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
                className={prata.className}
              >
                {option.titulo}
              </div>
              <div
                style={{
                  fontSize: "2.3rem",
                  lineHeight: "1.1em",
                  textAlign: "center",
                  padding: "6px 0px 0px 0px",
                  color: "#f4debb",
                }}
                className={alex.className}
              >
                Mulheres
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f8c684",
                  fontSize: "3rem",
                }}
                className={alex.className}
              >
                {option.peso}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <img
                  className="w-[220px]"
                  style={{
                    border: "4px solid #eddeae",
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                  src={"/images/diet-belly.png"}
                  alt={"barriga"}
                />
                <div
                  className="w-[65%]"
                  style={{
                    margin: "-30px 0px 0px 0px",
                    border: "2px solid #eddeae",
                    borderRadius: "20px",
                    padding: "36px 20px 20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    rowGap: "0.2em",
                    background: "#060606",
                  }}
                >
                  <div
                    className={carattere.className}
                    style={{
                      color: "#f8c684",
                      fontSize: "2rem",
                      lineHeight: "1em",
                      textAlign: "center",
                    }}
                  >
                    {option.desc}
                  </div>
                  <div
                    className={`text-[2em] ${barlow.className}`}
                    style={{
                      color: "#fff3da",
                      display: "flex",
                      columnGap: "0.2em",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <div className="text-[0.7em]">€</div>
                    <div>{option.precoOrig}</div>
                    <div
                      style={{
                        width: "100%",
                        height: "2px",
                        backgroundColor: "red",
                        transform: "rotate(22deg)",
                        position: "absolute",
                      }}
                    ></div>
                  </div>
                  <div
                    className={`text-[2.4em] ${barlow.className}`}
                    style={{
                      color: "#ffffff",
                      display: "flex",
                      columnGap: "0.2em",
                      alignItems: "center",
                    }}
                  >
                    <div className="text-[0.7em]">€</div>
                    {option.preco}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "1.2rem" }}>
                {option.num === 1 ? (
                  <div
                    className="cursor-pointer"
                    style={productChoiceStyle}
                    onClick={openModalFirstProduct}
                  >
                    ESCOLHER ESSA OPÇÃO
                    <div style={productChoiceFurtherStyle} />
                  </div>
                ) : option.num === 2 ? (
                  <div
                    className="cursor-pointer"
                    style={productChoiceStyle}
                    onClick={openModalSecondProduct}
                  >
                    ESCOLHER ESSA OPÇÃO
                    <div style={productChoiceFurtherStyle} />
                  </div>
                ) : (
                  <div
                    className="cursor-pointer"
                    style={productChoiceStyle}
                    onClick={openModalThirdProduct}
                  >
                    ESCOLHER ESSA OPÇÃO
                    <div style={productChoiceFurtherStyle} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  //----------------Handlers----------------
  const addFirstProduct = () => {
    let product = {
      id: 1,
      name: "Método Real 2 a 4kg",
      description: "metodo real 2 a 4kg",
      quantity: 1,
      key: "metodo-2-a-4",
      value: 19.9,
    };
    addToCart(product);
  };

  const addSecondProduct = () => {
    let product = {
      id: 2,
      name: "Método Real 4 a 6kg",
      description: "metodo real 4 a 6kg",
      quantity: 1,
      key: "metodo-4-a-6",
      value: 19.9,
    };
    addToCart(product);
  };

  const addThirdProduct = () => {
    let product = {
      id: 3,
      name: "Método Real 5 a 7kg",
      description: "metodo real 5 a 7kg",
      quantity: 1,
      key: "metodo-5-a-7",
      value: 19.9,
    };
    addToCart(product);
  };

  const openModalFirstProduct = () => {
    openModalAddCart();
    addFirstProduct();
  };

  const openModalSecondProduct = () => {
    openModalAddCart();
    addSecondProduct();
  };

  const openModalThirdProduct = () => {
    // document.getElementById("my_modal_6").showModal();
    openModalAddCart();
    addThirdProduct();
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <CartIcon count={state.cart.length} />
      <ModalUpgrade isOpen={isModalAddCartOpen} onClose={closeModalAddCart} />
      <div>
        {/* Section 1 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/marble-2.png')]
            bg-cover
            bg-center
            w-full
            flex
            flex-col
            gap-y-10
            pt-20
            pb-20
            justify-between
            items-center
          "
        >
          <div className="text-[#e2be76]">
            <div
              style={{
                fontSize: "39px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              className={prata.className}
            >
              Método Real
            </div>
            <div
              style={{
                fontSize: "20px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              className={prata.className}
            >
              (Re)educação (Al)imentar
            </div>
          </div>
          <div
            style={{
              width: "20rem",
              height: "35rem",
              background: "#e2be76",
              border: "2px solid #e2be76",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1029029953?autoplay=1&muted=0&controls=1"
                width="100%"
                height="100%"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
                title="Vimeo Video"
              ></iframe>
            </div>
          </div>
          <div
            style={{
              fontSize: "37px",
              textAlign: "center",
              color: "#e2be76",
              lineHeight: "2.2rem",
            }}
            className={alex.className}
          >
            Dra. Raquel Kindlovits Nutricionista
          </div>
          <button
            onClick={() => {
              document.getElementById("options-section").scrollIntoView({
                behavior: "smooth",
              });
            }}
            style={{
              zIndex: 999,
              position: "relative",
              borderRadius: "20px",
              padding: "10px 20px",
              fontWeight: 600,
              background: "linear-gradient(145deg, #e2be76, #cba96a)",
              color: "#000",
              textTransform: "uppercase",
              boxShadow:
                "4px 4px 8px rgba(0, 0, 0, 0.25), inset 2px 2px 5px rgba(255, 255, 255, 0.4)",
              textAlign: "center",
              transform: "perspective(500px) rotateX(5deg)",
              overflow: "hidden",
            }}
          >
            Chegou a minha hora de emagrecer!
            <div
              style={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 0.2) 100%)",
                animation: "lightMove 2s linear infinite",
                zIndex: 0,
                opacity: 0.5,
              }}
            />
          </button>
        </div>
        {/* Section 2 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/marble-2.png')]
            bg-cover
            bg-center
            w-full
            h-[800px]
            flex
            pt-20
            pb-20
            flex-col
            justify-between
            items-center
          "
        >
          <div className="text-[#e2be76]">
            <div
              style={{
                fontSize: "36px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              className={prata.className}
            >
              PLANO ALIMENTAR
            </div>
            <div
              style={{
                fontSize: "16px",
                textTransform: "uppercase",
                textAlign: "center",
                paddingTop: "20px",
              }}
              className={prata.className}
            >
              Elaborado pela
            </div>
            <div
              style={{
                fontSize: "36px",
                textAlign: "center",
                color: "#e2be76",
                lineHeight: "2.3rem",
              }}
              className={alex.className}
            >
              Dra. Raquel Kindlovits
            </div>
          </div>
          <div
            style={{
              width: "20rem",
              height: "20rem",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={"/images/vertical.png"}
              alt={"Dra. Raquel Kindlovits"}
              width={120}
              height={120}
              className="object-cover"
            />
          </div>
          <div
            style={{
              fontSize: "30px",
              textAlign: "center",
              color: "#e2be76",
              lineHeight: "2.2rem",
            }}
            className={prata.className}
          >
            A sua virada de chave começa aqui e agora
          </div>
        </div>
        {/* Section 3 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/flare-1.png')]
            bg-cover
            bg-center
            w-full
            h-[800px]
            flex
            pt-16
            pb-16
            flex-col
            justify-between
            items-center
          "
        >
          <div className="text-[#e2be76]">
            <div
              style={{
                fontSize: "78px",
                lineHeight: "1em",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              className={playfair.className}
            >
              Procuro
            </div>
            <div
              style={{
                fontSize: "69px",
                lineHeight: "1em",
                textTransform: "uppercase",
                textAlign: "center",
              }}
              className={playfair.className}
            >
              Mulheres
            </div>
          </div>
          <div
            style={{ margin: "-60px 0px 0px 0px" }}
            className="
            flex
            flex-col
            justify-between
            items-center
          "
          >
            <Image
              src={"/images/arc.png"}
              alt={"Dra. Raquel Kindlovits"}
              width={270}
              height={270}
            />
          </div>
          <div
            style={{ width: "100%" }}
            className="
            flex
            flex-col
            justify-between
            items-center
            gap-3
          "
          >
            <div
              style={{
                fontSize: "34px",
                textAlign: "center",
                color: "#fff",
                lineHeight: "2.2rem",
              }}
              className={poppins.className}
            >
              que pretendem:
            </div>
            <div
              className="
            flex
            flex-col
            justify-between
            items-center
          "
            >
              <div style={{ margin: "0px 0px -20px 0px", zIndex: "9" }}>
                <Image
                  src={"/images/gold-badge.png"}
                  alt={"abaixo"}
                  width={29}
                  height={29}
                />
              </div>
              <div
                style={{
                  fontSize: "15px",
                  borderRadius: "20px",
                  padding: "14px 14px 10px 14px",
                  width: "85%",
                  border: "1px solid #e2be76",
                  borderRadius: "20px",
                  color: "#fff",
                }}
                className={poppins.className}
              >
                <ol>
                  <li>✔ Elevar a autoestima e confiança</li>
                  <li>✔ Sentir-se feliz ao se olhar no espelho</li>
                  <li>✔ Maior aceitação social </li>
                  <li>✔ Ganhar mais saúde e anos de vida</li>
                  <li>✔ Melhorar a disposição e o humor </li>
                  <li>
                    ✔ Viver experiências de qualidade ao lado dos filhos,
                    familiares e amigos
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/perfil-bw.jpg')]
            bg-cover
            bg-center
            w-full
            h-[800px]
            flex
            pt-36
            pb-28
            flex-col
            justify-between
            items-center
          "
        >
          {/*nvl 1 flutuando*/}
          <div
            style={{
              height: "50%",
              width: "10px",
              background: "#cba544",
              position: "absolute",
              top: "0px",
              right: "1.2em",
            }}
          ></div>
          {/*nvl 1 a*/}
          <div style={{ width: "80%" }}>
            <div
              style={{
                paddingBottom: "10px",
                fontSize: "19px",
                lineHeight: "1em",
                textTransform: "uppercase",
                textAlign: "right",
                color: "#cba544",
              }}
              className={playfair.className}
            >
              muito além da estética
            </div>
            <div
              style={{
                paddingBottom: "33px",
                fontSize: "24px",
                lineHeight: "1em",
                textTransform: "uppercase",
                textAlign: "right",
                color: "#ffffff",
              }}
              className={playfair.className}
            >
              perder o excesso de peso
            </div>
            <div
              style={{
                paddingBottom: "7px",
                fontSize: "19px",
                lineHeight: "1em",
                textTransform: "uppercase",
                textAlign: "right",
                color: "#cba544",
              }}
              className={playfair.className}
            >
              significa
            </div>
            <div
              style={{
                paddingBottom: "10px",
                fontSize: "46px",
                lineHeight: "1em",
                textTransform: "uppercase",
                textAlign: "right",
                color: "#f4debb",
              }}
              className={playfair.className}
            >
              ganhar vida
            </div>
            <div
              style={{
                paddingBottom: "10px",
                fontSize: "34px",
                lineHeight: "1em",
                display: "flex",
                justifyContent: "flex-end",
                columnGap: "10px",
              }}
              className={alex.className}
            >
              <div style={{ color: "#edb013" }}>Emprego</div>
              <div style={{ color: "#ffffff" }}>Alegria</div>
              <div style={{ color: "#db9848" }}>Leveza</div>
            </div>
            <div
              style={{
                paddingBottom: "10px",
                fontSize: "34px",
                lineHeight: "1em",
                display: "flex",
                justifyContent: "flex-end",
                columnGap: "10px",
              }}
              className={alex.className}
            >
              <div style={{ color: "#ffffff" }}>Aceitação</div>
              <div style={{ color: "#eda210" }}>Paz</div>
              <div style={{ color: "#ffffff" }}>Família</div>
            </div>
          </div>
          {/*nvl 1 b*/}
          <div
            className="            
            flex
            gap-2
            flex-col
            justify-between
            items-center
            "
          >
            <div
              style={{
                fontSize: "38px",
                textAlign: "center",
                color: "#e2be76",
                lineHeight: "2.2rem",
              }}
              className={prata.className}
            >
              MÉTODO REAL
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "1em",
                rowGap: "6px",
                padding: "8px",
                width: "100%",
                background: "#935837",
                borderRadius: "20px",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                letterSpacing: ".45em",
              }}
              className={poppins.className}
            >
              <div>
                <b style={{ color: "#ffcd67" }}>RE</b>(EDUCAÇÃO)
              </div>
              <div>
                <b style={{ color: "#ffcd67" }}>AL</b>(IMENTAR)
              </div>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/raquel-bw-vertic.png')]
            sm:bg-[url('/images/raquel-bw-vertic.png')] 
            bg-cover
            bg-center
            w-full
            h-[800px]
            pb-[30px]
            flex
            flex-col
            justify-end
          "
        >
          <div style={{ height: "60%" }}>
            <div
              style={{
                margin: "30px 1em 0px 1em",
                fontSize: "15px",
                padding: "14px 10px 20px 10px",
                border: "4px solid #bc9e7e",
                borderBottom: "transparent",
                borderRadius: "15em 15em 0 0",
                color: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  padding: "4.5em 0 0 0",
                  letterSpacing: ".1em",
                  maxWidth: "80%",
                  fontSize: "12px",
                }}
                className={montserrat.className}
              >
                O SEU PASSADO NÃO DETERMINA O SEU POTENCIAL FUTURO
              </div>
              <div
                className={cormorant.className}
                style={{
                  fontSize: "5rem",
                  padding: ".1em 0 0 0",
                  textAlign: "left",
                  lineHeight: "1.9rem",
                }}
              >
                Acredite
              </div>
              <div
                style={{
                  alignSelf: "left",
                  textAlign: "left",
                  padding: ".3em 0 0 0",
                  letterSpacing: ".1em",
                  maxWidth: "100%",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
                className={montserrat.className}
              >
                naquilo que te fez acordar. porque a qualquer momento alguém
                pode aparecer e
              </div>
              <div
                className={cormorant.className}
                style={{
                  fontSize: "5rem",
                  alignSelf: "right",
                  textAlign: "right",
                  padding: "0 0 0 0",
                  lineHeight: "1.9rem",
                }}
              >
                mudar
              </div>
              <div
                style={{
                  alignSelf: "right",
                  textAlign: "right",
                  padding: "0 0 0 0",
                  letterSpacing: ".1em",
                  maxWidth: "100%",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
                className={montserrat.className}
              >
                a sua vida
              </div>
              <div
                className={cormorant.className}
                style={{
                  fontSize: "3.6rem",
                  padding: "0 0 0 0",
                  textAlign: "left",
                  lineHeight: "1.5rem",
                }}
              >
                E esse alguém
              </div>
              <button
                onClick={() => {
                  document.getElementById("options-section").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                style={{
                  marginTop: "15px",
                  alignSelf: "center",
                  fontSize: "25px",
                  fontWeight: "600",
                  lineHeight: "1em",
                  padding: "14px 40px 14px 40px",
                  background:
                    "linear-gradient(33deg, #935837, #935837, #BE6C4D, #935837, #B27050)",
                  // background: "#935837",
                  width: "fit-content",
                  borderRadius: "26px",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  letterSpacing: ".4em",
                }}
              >
                ÉS TU!
              </button>
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/marble-2.png')]
            bg-cover
            bg-center
            w-full
            flex
            pt-20
            pb-16
            flex-col
            gap-10
            justify-center
            items-center
          "
          style={gradientBg}
        >
          <div
            style={{
              color: "#e2be76",
              fontSize: "1.5rem",
              textTransform: "uppercase",
              textAlign: "center",
            }}
            className={quicksand.className}
          >
            Veja a evolução de quem já seguiu o plano alimentar
          </div>
          <div>
            <CarouselBeforeAfter slides={beforeAndAfter} />
          </div>
          <div>
            <MainCarousel slides={beforeAndAfter} />
          </div>
        </div>
        {/* Section 7 and 8 */}
        <div
          id="wrap-overlay"
          className="
            w-full
            flex
            pt-12
            pb-14
            flex-col
            justify-center
            items-center
            text-[#e2be76]
            gap-2
          "
          style={gradientBg2}
        >
          {/*1*/}
          <div
            style={{
              margin: "0px 0px 20px 0px",
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.2em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
                className={playfair.className}
              >
                o que falam sobre a
              </div>
              <div
                style={{
                  fontSize: "2.3rem",
                  lineHeight: "1.1em",
                  textAlign: "center",
                  padding: "6px 0px 0px 0px",
                }}
                className={alex.className}
              >
                Dra. Raquel Kindlovits
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/images/five-star.png"}
                alt={"Dra. Raquel Kindlovits"}
                width={160}
                height={160}
              />
            </div>
            <div
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={"/images/cut-raquel-google.png"}
                alt={"Dra. Raquel Kindlovits"}
                width={350}
                height={350}
              />
            </div>
          </div>
          {/*2*/}
          <div
            className="
            flex
            flex-col
            justify-center
            items-center
            pb-12
          "
            style={{ width: "85%", height: "80%" }}
          >
            <AlternativeCarousel slides={testemony} />
          </div>
        </div>
        {/* Section 9 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/raquel-lembrete.fw.png')]
            sm:bg-[url('/images/raquel-lembrete.fw.png')] 
            bg-cover
            bg-center
            w-full
            h-[720px]
            pl-3
            pr-3
            pt-8
            pb-20
            flex
            flex-col
            justify-between
          "
        >
          <div>
            <div
              className={`text-[4em] text-[#f4d7a7] leading-none ${lora.className}`}
            >
              Lembrete
            </div>
            <div
              style={{ textAlign: "end", padding: "0px 20px 0px 0px" }}
              className={`text-[4em] text-[#f4d7a7] leading-none ${lora.className}`}
            >
              Lembrete
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="pt-10"
          >
            <div id="quote-box">
              <img src="/images/raquel-bw-circle-ava.png" alt="decisions" />
              <div id="quote-text" className={poppinsHeavy.className}>
                Decisões tem consequências.
                <br />
                Indecisões ainda mais.
              </div>
            </div>
          </div>
          <div>
            <div
              className={`text-[4em] text-[#f4d7a7] leading-none ${lora.className}`}
            >
              Lembrete
            </div>
            <div
              style={{ textAlign: "end", padding: "0px 20px 0px 0px" }}
              className={`text-[4em] text-[#f4d7a7] leading-none ${lora.className}`}
            >
              Lembrete
            </div>
          </div>
        </div>
        {/* Section 10 */}
        <div
          className="
            bg-[url('/images/city-flare.png')]
            bg-cover
            bg-no-repeat
            bg-center
            w-full
            h-[720px]
            flex
            pt-7
            pb-0
            flex-col
            justify-between
            items-center
          "
        >
          {/*top*/}
          <div
            className="h-[30%]"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
          >
            <div
              className={`text-[34px] text-[#f3fff1] leading-none ${barlow.className}`}
              style={{ textTransform: "uppercase" }}
            >
              planos alimentares
            </div>
            <div
              className={`text-[50px] text-[#ffde59] leading-tight mb-2 ${alex.className}`}
            >
              de emagrecimento
            </div>
            <div className="w-[100%]" style={{ position: "relative" }}>
              <div
                className={`text-[29px] ${barlow.className}`}
                style={{
                  position: "relative",
                  textAlign: "center",
                  fontWeight: "700",
                  color: "#000",
                  zIndex: 1,
                }}
              >
                O que vais receber:
              </div>
              <img
                className="absolute w-[23.5em] h-[20em] pb-3"
                src={"/images/brush-yellow.svg"}
                alt={"brush"}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(180deg)",
                }}
              />
            </div>
          </div>
          {/*bottom*/}
          <div
            className="
            bg-[url('/images/iphone-fade.png')]
            bg-no-repeat
            bg-contain
            bg-bottom
            w-[80%]
            h-[70%]          
            flex
            flex-col
            justify-end
            items-center
            gap-5
            pb-9
          "
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div id="metallic-number">1</div>
              <div
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
                className={poppinsHeavy.className}
              >
                <span style={{ color: "#ffde59" }}> Variedade alimentar:</span>
                <br />
                7 cardápios diferentes
                <br />
                (de segunda-feira a domingo)
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div id="metallic-number">2</div>
              <div
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
                className={poppinsHeavy.className}
              >
                opção <span style={{ color: "#ffde59" }}> vegan</span> em
                <br />
                <span style={{ color: "#ffde59" }}> todas</span> as refeições
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div id="metallic-number">3</div>
              <div
                style={{
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
                className={poppinsHeavy.className}
              >
                diário <span style={{ color: "#ffde59" }}> alimentar</span> para
                <br />
                auxiliar no
                <br />
                cumprimento do plano
              </div>
            </div>
          </div>
        </div>
        {/* Section 11 Options */}
        <div id="options-section">
          <PurchaseOptions />
        </div>
        {/* Section 12 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/raquel-apple-black.png')]
            bg-cover
            bg-center
            w-full
            h-[860px]
            flex
            pt-12
            pb-16
            flex-col
            justify-between
            items-center
          "
        >
          {/*Logo e nome*/}
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-[6em] mb-1"
              src={"/images/logo-clas.png"}
              alt={"logo"}
            />
            <div
              style={{
                fontSize: "23px",
              }}
              className={alex.className}
            >
              Dra. Raquel Kindlovits
            </div>
            <div
              style={{
                lineHeight: "1em",
                fontSize: "3.3rem",
                color: "#cba544",
                textTransform: "uppercase",
              }}
              className={playfair.className}
            >
              Experiência
            </div>
            <div
              style={{ lineHeight: "1em", fontSize: "3rem" }}
              className={alex.className}
            >
              Premium
            </div>
          </div>
          {/*Tabela*/}
          <div
            style={{ width: "100%" }}
            className="
            flex
            flex-col
            justify-between
            items-center
          "
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div id="clipped-div-fade-more"></div>
              <div id="clipped-div-fade"></div>
              <div
                id="clipped-div"
                style={{
                  fontSize: "34px",
                  textAlign: "center",
                  lineHeight: "2.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  fontWeight: "600",
                }}
                className={poppins.className}
              >
                Upgrade
              </div>
            </div>
            <div
              className="
            flex
            flex-col
            justify-between
          "
            >
              <div
                style={{
                  margin: "0px 0px -20px 0px",
                  zIndex: "9",
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "24px",
                }}
              >
                <Image
                  src={"/images/gold-badge.png"}
                  alt={"abaixo"}
                  width={29}
                  height={29}
                />
              </div>
              <div
                style={{
                  fontSize: "15px",
                  borderRadius: "20px",
                  padding: "14px 14px 10px 14px",
                  width: "100%",
                  border: "1px solid #e2be76",
                  borderRadius: "20px",
                  color: "#fff",
                  justifyContent: "center",
                }}
                className={poppins.className}
              >
                <div
                  style={{
                    color: "#feec82",
                    fontSize: "1.8em",
                    lineHeight: "1.3em",
                    textAlign: "center",
                  }}
                  className={alex.className}
                >
                  Consultoria virtual comigo:
                </div>
                <ol>
                  <li>- Acesso ao grupo no whatsapp</li>
                  <li>- Suporte para dúvidas no primeiro mês</li>
                  <li>- Comunidade de mulheres</li>
                  <li>- Mulheres com os mesmos objetivos</li>
                  <li>- Partilhas de experiências</li>
                  <li>- Suporte motivacional</li>
                </ol>
              </div>
            </div>
            <div style={{ display: "none", margin: "18px 0px 0px 0px" }}>
              <button link={"/purchasetime"} text={"Escolher Premium"}></button>
            </div>
          </div>
        </div>
        {/* Section 13 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/marble-2.png')]
            bg-cover
            bg-center
            w-full
            flex
            pt-20
            pb-16
            px-6
            flex-col
            gap-10
            justify-center
            relative
          "
          style={gradientBg3}
        >
          <div>
            <div
              className={federo.className}
              style={{
                textTransform: "uppercase",
                lineHeight: "1.1em",
                fontSize: "3rem",
                color: "#cab9af",
                textShadow: "2px 2px 8px rgba(128, 128, 128, 0.5)",
              }}
            >
              Conheça
            </div>
            <div
              className={dancing.className}
              style={{
                fontSize: "2.85rem",
                letterSpacing: "0.045em",
                textAlign: "center",
              }}
            >
              Raquel Kindlovits
            </div>
            <div id="horizontal-line"></div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "0px",
            }}
          >
            <Image
              src={"/images/raquel-apple-badge.png"}
              alt={"dra raquel"}
              width={123}
              height={123}
            />
          </div>
          <div className={`${poppins.className}`}>
            Nutricionista desde 2016. Pós-graduada e{" "}
            <span style={{ color: "#ffdb96" }}>especialista</span> em{" "}
            <span style={{ color: "#ffdb96" }}>Nutrição Desportiva.</span>{" "}
            Mestre em Ciências Cardiovasculares e a finalizar o{" "}
            <span style={{ color: "#ffdb96" }}>PhD em Nutrição Clínica.</span>
            <br />
            <br />
            Imersa no campo da nutrição a atuar em
            <span style={{ color: "#ffdb96" }}> clínicas</span>, com passagens
            pela <span style={{ color: "#ffdb96" }}>docência</span> e anos de
            <span style={{ color: "#ffdb96" }}> investigação científica. </span>
            Também é<span style={{ color: "#ffdb96" }}> palestrante</span> e
            <span style={{ color: "#ffdb96" }}> autora</span> de diversos
            artigos científicos em revistas internacionais de alto impacto.
            <br />
            <br /> Realizou mais de
            <span style={{ color: "#ffdb96" }}> 1.000 planos alimentares </span>
            que, em conjunto com o suporte nutricional, garantiram o
            <span style={{ color: "#ffdb96" }}>
              {" "}
              emagrecimento e a mudança de vida de centenas de mulheres.
            </span>
            <br />
            <br />
            Com um total de{" "}
            <span style={{ color: "#ffdb96" }}>
              {" "}
              mais de 1 tonelada de quilos eliminados,{" "}
            </span>
            atualmente partilha de planos alimentares para{" "}
            <span style={{ color: "#ffdb96" }}> mulheres</span> que desejam
            <span style={{ color: "#ffdb96" }}> emagrecer</span>, de modo{" "}
            <span style={{ color: "#ffdb96" }}> saudável e permanente.</span>
            <br />
            <br />
            Os quase 10 anos de atuação profissional renderam{" "}
            <span style={{ color: "#ffdb96" }}>
              {" "}
              100% de feedbacks e avaliações positivas.
            </span>{" "}
            A construção deste <span style={{ color: "#ffdb96" }}>
              {" "}
              legado
            </span>{" "}
            é baseada no aumento da autoestima, da autoconfiança e da qualidade
            de vida, promovidos com o emagrecimento e{" "}
            <span style={{ color: "#ffdb96" }}>
              {" "}
              exclusivamente através da alimentação.
            </span>
          </div>
        </div>
        {/* Section 14 */}
        <div
          id="wrap-overlay"
          className="
            bg-[url('/images/front-pb-raq.jpg')]
            bg-cover
            bg-center
            w-full
            h-[720px]
            flex
            pt-20
            pb-8
            px-3
            flex-col
            gap-10
            justify-between
          "
        >
          <div
            className="px-3"
            style={{
              display: "flex",
              justifyContent: "start",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{ color: "#f4e0bb" }}
              className={`text-3xl ${poppinsHeavy.className}`}
            >
              Vires a chave, sinta-se confiante e com a autoestima elevada.
            </div>
            <div
              style={{ color: "#f4e0bb" }}
              className={`text-lg ${montserrat.className}`}
            >
              Vou ajudar-te a iniciar a melhor fase da tua vida.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div className="pb-2">
              <BuyButton
                color={"#f8c684"}
                link={"/checkout"}
                text={"Chegou a minha hora de emagrecer!"}
              />
            </div>
            <img
              style={{ zIndex: "1" }}
              className="w-[14rem] mb-1"
              src={"/images/chave.png"}
              alt="chave"
            />
          </div>
          <div style={{ position: "absolute", bottom: "0px" }}>
            <img
              className="w-[150%]"
              src={"/images/aderecos.png"}
              alt="chave"
            />
          </div>
        </div>
        {/* Section 15 Footer */}
        <Footer />
      </div>
      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></div>
      <WhatsAppButton />
    </div>
  );
}
