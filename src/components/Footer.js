import React from "react";

function Footer() {
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

  function Modal1() {
    return (
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Política de Cancelamento e Devolução
          </h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  function Modal2() {
    return (
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Política de Entrega</h3>
          <p className="py-4">{delivery}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  function Modal3() {
    return (
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Política de Privacidade</h3>
          <p className="py-4">{privacy}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  function Modal4() {
    return (
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Preçários</h3>
          <p className="py-4">{prices}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  function Modal5() {
    return (
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contatos</h3>
          <p className="py-4">{contact}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Fechar</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }

  const openModal1 = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const openModal2 = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const openModal3 = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const openModal4 = () => {
    document.getElementById("my_modal_4").showModal();
  };

  const openModal5 = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <>
      <Modal1 />
      <Modal2 />
      <Modal3 />
      <Modal4 />
      <Modal5 />
      <div
        id="wrap-overlay"
        className="
            w-full
            flex
            pt-12
            pb-10
            px-10
            flex-col
            gap-3
            justify-center
          "
      >
        <div
          className="
            w-full
            flex
            justify-around
            pb-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-y-3
              "
          >
            <div style={{ display: "none" }} onClick={() => openModal1()}>
              Política de Cancelamento e Devolução
            </div>
            <div onClick={() => openModal2()}>Política de Entregas</div>
            <div onClick={() => openModal3()}>Política de Privacidade</div>
          </div>
          <div
            className="
              flex
              flex-col
              gap-y-3
              "
          >
            <div onClick={() => openModal5()}>Contactos</div>
            <div onClick={() => openModal4()}>Preçários</div>
          </div>
        </div>
        <div
          className="
            w-full
            flex
            justify-center
            flex-col
            gap-y-2
            "
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="w-[4.2em]"
              src={"/images/mastercard.png"}
              alt={"logo"}
            />
            <img className="w-[3.8em]" src={"/images/visa.png"} alt={"logo"} />
            <img
              className="w-[5.3em]"
              src={"/images/easypay.svg"}
              alt={"logo"}
            />
          </div>
          <div style={{ textAlign: "center" }}>{nameNifEtc}</div>
          <div style={{ textAlign: "center" }}>{address}</div>
          <div style={{ color: "#888888", textAlign: "center" }}>
            {description}
          </div>
          <div style={{ textAlign: "center" }}>{easypaySeller}</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
