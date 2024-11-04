import style from "@/styles/menu.module.css";

export default () => (
  <header
    className={`d-flex p-3 justify-content-around align-items-center ${style.header} `}
  >
    <div className="d-flex justify-content-center">
      <img src="/3.png" alt="Bell" width={30} height={30} priority />
    </div>
    <div className="d-flex flex-column justify-content-center h-100">
      <div className="d-flex justify-content-center h-75">
        <img src="/1.png" alt="Brand Logo" className={`h-100`} priority />
      </div>
      <div>Coffe & Restaurant</div>
    </div>
    <div className="d-flex justify-content-center">
      <img src="/6.png" alt="Bell" width={30} height={30} priority />
    </div>
  </header>
);
