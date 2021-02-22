import React from "react";
import whastappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img
            src="https://scontent-gru1-1.xx.fbcdn.net/v/t31.0-1/p200x200/21125422_1649165188531114_1742730039810031684_o.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_eui2=AeH4txtaVcsv-d_kxfrKzJt81U6Vd1qx9nPVTpV3WrH2czocd-1E4DFDcpfHZc7ghLvhReu0Sf5IpD57KEdKz-7V&_nc_ohc=R_UTrFLsMOMAX8FdHQb&_nc_ht=scontent-gru1-1.xx&_nc_tp=6&oh=67ff97bc9f21556e40ddec0aa07c4159&oe=5F4E3B84"
            alt="Alison Maziero"
          />
          <div>
            <strong>Alison Oliveira</strong>
            <span>Quimica</span>
          </div>
        </header>
        <p>
          Entusiasta por quimica avançada.
          <br />
          <br />
          Entusiasta por quimica avançada e outras areas do conhecimento.
        </p>
        <footer>
          <p>
            Preço por hora
            <strong>R$ 80.00</strong>
          </p>

          <button type="button">
            <img src={whastappIcon} alt="WhatsApp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    </main>
  );
}

export default TeacherItem;
