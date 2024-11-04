import style from "@/styles/menu.module.css";

export default () => (
  <div className="d-flex h-75 rounded-4 bg-light bg-gradient bg-opacity-75 overflow-hidden position-relative">
    <div
      className={`d-flex h-100 w-100 flex-column justify-content-end ${style.details}`}
    >
      <div className="d-flex w-100 h-50 justify-content-center align-items-center">
        <img src="/imgs/10.png" className="align-self-center h-100" />
      </div>
      <div className="d-flex w-100 h-25">
        <div className="d-flex flex-column w-50 h-100 ps-5 pb-5 align-items-end">
          <p className={`ps-5 text-light ${style.title}`}>Bagel de Ajonjoli</p>
          <p
            className={`d-flex w-75 h-25 justify-content-center align-items-center px-5 py-3 rounded bg-light text-black`}
          >
            $ 10.000
          </p>
        </div>
        <div className="d-flex w-50 h-100 justify-content-start align-items-start">
          <img src="/13.png" width={40} height={40} alt="" />
        </div>
      </div>
    </div>
  </div>
);
