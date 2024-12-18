"use strict";
"use client";
import { React, useEffect, useState, useRef } from "react";
import Image from "next/image";
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
// LINK
import Link from "next/link";
import { useGlobalContext } from "../app/context/GlobalContext";

const alex = Alex_Brush({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const poppinsLight = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const gradientBg = {
  backgroundImage:
    "radial-gradient(circle farthest-corner at -10% 40%, rgba(255, 219, 150, 1) 0%, rgba(2, 2, 2, 1) 30%)",
};

const gradientBg2 = {
  backgroundImage:
    "radial-gradient(circle farthest-corner at 100% 20%, rgba(255, 219, 150, 1) 0%, rgba(2, 2, 2, 1) 16%)",
};

export default function PurchaseTime({ onCart }) {
  const { state, addToCart } = useGlobalContext();
  const initialTimeLeft = 7200;
  const [allChecked, setAllChecked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isRunning, setIsRunning] = useState(true);
  
  const PremiumButton = ({ color, link, text }) => {
    const handleAddPremiumToCart = () => {
      const premium = {
        id: 4,
        name: "Método Real Premium",
        description: "metodo-real-premium",
        quantity: 1,
        key: "premium-metodo",
        value: 9.9,
      };
      if (state.cart.length > 1) {
        null;
      } else {
        addToCart(premium);
      }
    };
    return (
      <Link href="/checkout">
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            padding: "10px 20px",
            fontWeight: 600,
            background: color
              ? `linear-gradient(145deg, ${color}, ${color})`
              : "linear-gradient(145deg, #e6e272, #d3e35f)",
            color: "#000",
            textTransform: "uppercase",
            textAlign: "center",
            transform: "perspective(500px) rotateX(5deg)",
            overflow: "hidden",
          }}
          onClick={handleAddPremiumToCart}
        >
          <>{text}</>
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
        </div>
      </Link>
    );
  };

  const CountdownTimer = () => {
    const getDifferenceInHours = (firstTime, secondTime) => {
      const diffMs = secondTime - firstTime;
      const diffHours = diffMs / (1000 * 60 * 60);
      return diffHours;
    };

    // Function to check if the counter should run based on localStorage data
    const checkIfActive = () => {
      const now = new Date();
      const currentTime = now.getTime();
      const storedTimestamp = localStorage.getItem("accessTimestamp");
      const storedTimeLeft = localStorage.getItem("timeLeft");

      // checa se há contador gravado
      if (storedTimestamp && storedTimeLeft) {
        const firstAccessTime = new Date(parseInt(storedTimestamp));
        const hoursDiff = getDifferenceInHours(firstAccessTime, now);
        const isSameDay = firstAccessTime.toDateString() === now.toDateString();

        // tem contador gravado dentro das ultimas duas horas
        // tem contador gravado mais velho do que as ultimas duas horas

        if (isSameDay && hoursDiff <= 2) {
          setTimeLeft(parseInt(storedTimeLeft));
          setIsRunning(true);
          /*
          console.log(
            "1) tem timer gravado, do mesmo dia, a menos de duas horas atrás"
          );
          */
        } else if (!isSameDay || hoursDiff > 2) {
          setTimeLeft(initialTimeLeft);
          setIsRunning(true);
          localStorage.setItem("accessTimestamp", currentTime);
          localStorage.setItem("timeLeft", initialTimeLeft);
          /*
          console.log(
            "2) tem timer gravado, mas ou não é do mesmo dia ou não foi a menos de duas horas atrás"
          );
          */
        } else {
          setTimeLeft(initialTimeLeft);
          setIsRunning(true);
          localStorage.setItem("accessTimestamp", currentTime);
          localStorage.setItem("timeLeft", initialTimeLeft);
          /*
          console.log("3) terceira opção");
          */
        }
      } else {
        // não tem contador gravado, então é preciso gravar
        localStorage.setItem("accessTimestamp", currentTime);
        localStorage.setItem("timeLeft", initialTimeLeft);
        setIsRunning(true);
        /*
        console.log("4) não há timers gravados, um novo será iniciado");
        */
      }
      setAllChecked(true);
    };

    useEffect(() => {
      checkIfActive();

      const timer = setInterval(() => {
        if (isRunning && timeLeft > 0) {
          setTimeLeft((prevTimeLeft) => {
            const newTimeLeft = prevTimeLeft - 1;
            localStorage.setItem("timeLeft", newTimeLeft);
            return newTimeLeft;
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [timeLeft]);
    /* Inicia e atualiza o timer no localStorage */

    useEffect(() => {
      const timeCheckInterval = setInterval(checkIfActive, 60000);
      return () => clearInterval(timeCheckInterval);
    }, []);
    /* Optional: recheck the condition every minute if needed */

    useEffect(() => {
      // console.log("timeLeft:", timeLeft);
    }, [timeLeft]);

    return (
      <div>
        {allChecked ? (
          <div>
            {isRunning ? (
              <div id="timer-clock-container">
                <div id="timer-clock-display">
                  {`${Math.floor(timeLeft / 3600)
                    .toString()
                    .padStart(2, "0")}:${Math.floor((timeLeft / 60) % 60)
                    .toString()
                    .padStart(2, "0")}:${Math.floor(timeLeft % 60)
                    .toString()
                    .padStart(2, "0")}`}
                </div>
              </div>
            ) : (
              !timeLeft(
                <div id="timer-clock-container">
                  <div id="timer-clock-display">00:00:00</div>
                  <div>Não há promoções no momento</div>
                </div>
              )
            )}
          </div>
        ) : (
          <div>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    );
  };
  /* ~ */

  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-black">
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
            pb-12
            flex-col
            justify-between
            items-center
          "
      >
        {/*logo e nome*/}
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
        {/*bottom*/}
        <div
          style={{ width: "100%" }}
          className="
            flex
            flex-col
            justify-between
            items-center
            gap-y-3
          "
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "6px",
            }}
          >
            <div
              style={{
                fontSize: "3.5em",
                textAlign: "center",
                lineHeight: "2.2rem",
                color: "#e2be76",
                margin: "0px 0px 6px 0px",
              }}
              className={alex.className}
            >
              Upgrade
            </div>
            <div
              style={{
                color: "#ffffff",
                fontSize: "1.23em",
                textTransform: "uppercase",
              }}
              className={poppinsLight.className}
            >
              Para mulheres determinadas
            </div>
            {timeLeft && (
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "1.2em",
                  textTransform: "uppercase",
                }}
                className={poppinsLight.className}
              >
                de <p id="riscado">€24,90</p> por
              </div>
            )}
          </div>
          <div
            className="
            flex
            flex-col
            justify-between
            items-center
            gap-y-3
          "
          >
            {timeLeft ? (
              <div id="price-tag-svg" className={poppins.className}>
                €9,90
              </div>
            ) : (
              <div id="normal-price-tag-svg">€24,90</div>
            )}
            <div>
              <CountdownTimer />
            </div>
            <div
              style={{
                color: "#cba544",
                fontSize: "1em",
                lineHeight: "1.2em",
                textAlign: "center",
                width: "100%",
                textTransform: "uppercase",
              }}
              className={poppinsLight.className}
            >
              *Oferta limitada até as próximas 2 horas
            </div>
          </div>
          {!onCart && <div style={{ margin: "6px 0px 0px 0px" }}>
            <PremiumButton link={"/checkout"} text={"Escolher Premium"} />
            <div style={{ margin: "8px 0px 0px 0px" }}>
              <Link href="/checkout">
                <button onClick>Seguir com a opção normal</button>
              </Link>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}