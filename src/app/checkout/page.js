"use strict";
"use client";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import Link from "next/link";
import PurchaseTime from "@/components/PurchaseTime";

export default function Home() {
  const { state, addToCart, removeFromCart } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [sdkAvailable, setSdkAvailable] = useState(false);
  const [productData, setProductData] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [clientData, setClientData] = useState({
    email: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState();
  const [isRemoveModalOpen, setRemoveModalOpen] = useState(false);

  //----------------Modals----------------
  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => setModalOpen(false);

  const handleClientData = (clientEmail) => {
    setClientData({
      email: clientEmail,
    });
  };

  function ClientModal({ isOpen, onClose, onSubmit }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);

      // Regex simples para validar e-mails
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("Insira um e-mail válido.");
      } else {
        setError("");
      }
    };

    const handleSubmit = () => {
      if (!error && email) {
        onSubmit(email); // Chama o callback com o e-mail
        setEmail(""); // Limpa o campo após enviar
        onClose(); // Fecha o modal
      }
    };

    return (
      isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-black">
            <h2 className="text-lg font-bold mb-5">Informe seu e-mail</h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-5"
              placeholder="Digite seu e-mail"
            />
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md font-semibold bg-gray-500 text-white hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                disabled={!email || error}
                className={`px-4 py-2 rounded-md font-semibold ${
                  !email || error
                    ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                    : "bg-[#2AC942] text-white hover:bg-[#22A335]"
                }`}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )
    );
  }

  const handleOpenRemoveModal = (id) => {
    setItemToRemove(id);
    setRemoveModalOpen(true);
  };

  const handleCloseRemoveModal = () => setRemoveModalOpen(false);

  const handleRemoveFromCart = () => {
    removeFromCart(itemToRemove);
    setItemToRemove();
    handleCloseRemoveModal();
  };

  function RemoveItemModal({ isOpen, onClose, onConfirm }) {
    return (
      isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-black">
            <h2 className="text-lg font-bold mb-5">
              Deseja remover esse produto do carrinho?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md font-semibold bg-gray-500 text-white hover:bg-gray-600"
              >
                Não
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 rounded-md font-semibold bg-[#c9b62a] text-white hover:bg-[#a49522]"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )
    );
  }

  //----------------Checkout SDK----------------
  function PreCheckoutModal({ isOpen, onClose, onConfirm }) {
    return (
      isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-black">
            <h2 className="text-lg font-bold mb-5">
              Deseja remover esse produto do carrinho?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-md font-semibold bg-gray-500 text-white hover:bg-gray-600"
              >
                Não
              </button>
              <button
                onClick={onConfirm}
                className="px-4 py-2 rounded-md font-semibold bg-[#c9b62a] text-white hover:bg-[#a49522]"
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )
    );
  }

  useEffect(() => {
    if (clientData.email?.length > 0) {
      handleEasyPayCheckout();
    }
  }, [clientData]);

  useEffect(() => {
    let itemsArr = [];
    if (state) {
      for (var i = 0; state.cart.length > i; i++) {
        let item = {
          description: state.cart[i].description,
          quantity: 1,
          key: state.cart[i].key,
          value: state.cart[i].value,
        };
        itemsArr.push(item);
      }
      setProductData(itemsArr);
    }
  }, [state]);
  /*Seta os produtos no carrinho*/

  useEffect(() => {
    if (state.cart && state.cart.length > 0) {
      const newTotal = state.cart.reduce(
        (sum, item) => sum + Number(item.value),
        0
      );
      const formattedTotal = Math.round(newTotal * 100) / 100;
      const thisTot = formattedTotal + "0";
      console.log("thisTot:", thisTot);
      const thisTotNum = Number(thisTot);
      console.log("thisTotNum:", thisTotNum);
      setTotal(formattedTotal);
    } else {
      setTotal(0);
    }
  }, [state]);
  /*Seta o total*/

  function isPremiumOnCart(obj) {
    if (obj.cart && Array.isArray(obj.cart)) {
      return obj.cart.some((item) => item.id === 4);
    }
    return false;
  }

  async function handleEasyPayCheckout() {
    let productBody = {
      type: ["single"],
      customer: {
        email: clientData.email,
      },
      payment: {
        methods: ["cc", "mb", "mbw", "dd", "vi", "uf", "sc"],
        type: "sale",
        capture: {
          descriptive: "Compra em Raquel Kindlovitz",
        },
        currency: "EUR",
        expiration_time: null,
      },
      order: {
        items: productData,
        key: "order-123",
        value: total,
      },
    };
    try {
      setLoading(true);
      const response = await fetch("/api/checkoutSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productBody),
      });

      const manifest = await response.json();

      if (manifest.session) {
        setSdkAvailable(true);
        easypayCheckout.startCheckout(manifest, {
          id: "easypay-checkout",
          logoUrl: "https://i.imgur.com/nWLNOer.png",
          buttonBorderRadius: 5,
          inputBorderRadius: 5,
          backgroundColor: "#ffffff",
          accentColor: "#2AC942",
          buttonBoxShadow: false,
        });
      } else {
        console.error("Erro ao obter a sessão de checkout");
      }
    } catch (error) {
      setSdkAvailable(true);
      console.error("Erro ao iniciar o checkout", error);
    } finally {
      setLoading(false);
    }
  }
  /*Faz chamada api*/
  // inputBackgroundColor: '#060606',

  function CartIcon({ count }) {
    return (
      <div className="fixed top-6 right-6 text-white p-4 w-14 h-14 shadow-lg transition-all duration-300">
        <ShoppingCartIcon className="h-6 w-6 text-white-800" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </div>
    );
  }

  const temp = false;

  return (
    <div className="min-h-screen bg-[#060606] text-white p-8">
      <div id="easypay-checkout"></div>
      {/* header */}
      <header className="mb-8 flex justify-between items-center">
        <Link href="/">
          <button className="font-xl text-gray-400 hover:text-white">
            Voltar
          </button>
        </Link>
        <h1 className="text-2xl font-bold flex items-center space-x-2">
          <ShoppingCartIcon className="h-7 w-7 text-white" />
          <span>Carrinho</span>
        </h1>
      </header>

      {/* items no carrinho */}
      <main className="space-y-6">
        {state.cart.length > 0 ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-3">
              <div className="text-gray-400 text-md font-semibold w-[76%]">
                Produto
              </div>
              <div className="text-gray-400 text-md font-semibold w-[20%]">
                Preço
              </div>
              <div className="text-gray-400 text-md font-semibold w-[4%] text-right"></div>
            </div>
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-gray-700 pb-4"
              >
                <div className="text-gray-300 text-xl w-[76%]">{item.name}</div>
                <div className="text-gray-100 text-xl w-[20%]">{`€ ${item.value}`}</div>
                <button
                  className="text-red-600 hover:text-red-800 font-bold text-lg w-[4%] text-right"
                  onClick={() => handleOpenRemoveModal(item.id)}
                >
                  <XCircleIcon className="h-6 w-6 text-red-600" />
                </button>
              </div>
            ))}
            <div className="flex items-end justify-end pt-2">
              <div className="flex gap-x-2 items-end justify-end text-xl font-bold text-gray-100 w-1/2 text-right">
                <div>Total</div>
                <div>€ {total}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            Seu carrinho está vazio
          </div>
        )}
      </main>

      {/* botão finalizar compra */}
      <div className="mt-6 flex justify-end">
        {state.cart.length > 0 && (
          <button
            onClick={handleOpenModal}
            disabled={loading}
            className={`w-[40%] py-4 px-4 rounded-md font-semibold ${
              loading
                ? "text-white bg-gray-600 cursor-not-allowed"
                : "text-white bg-[#2AC942] hover:bg-[#22A335]"
            }`}
          >
            {loading ? "Processando..." : "Fechar pedido"}
          </button>
        )}
      </div>

      {/* banner premium */}
      {temp && <PurchaseTime onCart={true} />}

      {/* adicionar premium */}
      {temp && (
        <div className="mt-6">
          {state.cart.length > 0 && !isPremiumOnCart(state) && (
            <button className="w-full py-3 px-4 text-md text-gray-900 bg-yellow-500 hover:bg-yellow-600 rounded-md font-semibold">
              Adicionar opção Premium
            </button>
          )}
        </div>
      )}

      <RemoveItemModal
        isOpen={isRemoveModalOpen}
        onClose={handleCloseRemoveModal}
        onConfirm={handleRemoveFromCart}
      />

      <ClientModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleClientData}
      />

      <Footer />

      <div className={sdkAvailable ? "easypay-sdk-background" : ""}></div>
    </div>
  );
}
