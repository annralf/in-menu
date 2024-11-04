import style from "@/styles/menu.module.css";

export default () => (
  <div className="d-flex h-100 rounded-4 bg-light bg-gradient bg-opacity-75 overflow-hidden position-relative">
    <div className={`h-100 w-100 position-absolute`}>
      <img src="/imgs/22.png" className="align-self-center h-100" />
    </div>
    <div className={`d-flex h-100 w-100 align-items-end ${style.wrapper}`}>
      <div className="w-50 h-25 px-4">
        <p className={`text-center ${style.title}`}>Desayunos</p>
        <p className={`px-5 ${style.option}`}>Panaderia</p>
        <p className={`px-5 ${style.option}`}>Bolleria</p>
        <p className={`px-5 ${style.option}`}>Cafes</p>
      </div>
      <div className="d-flex w-50 h-25 justify-content-start align-items-start">
        <img src="/13.png" width={40} height={40} alt="" />
      </div>
    </div>
  </div>
);
