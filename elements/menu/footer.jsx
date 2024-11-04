import style from "@/styles/menu.module.css";

export default ({ selected }) => (
  <div className={`d-flex p-3 justify-content-around ${style.footer} `}>
    <div className="d-flex justify-content-center align-items-center">
      {selected ? (
        <img
          src="/8.png"
          className="rounded-circle p-3 shadow"
          width={60}
          height={60}
          alt=""
        />
      ) : (
        <img
          src="/10.png"
          className="rounded-circle p-3 shadow"
          width={60}
          height={60}
          alt=""
        />
      )}
    </div>
    <div className="d-flex justify-content-center align-items-center">
      {selected ? (
        <img
          src="/14.png"
          className="rounded-circle p-3 shadow"
          width={60}
          height={60}
          alt=""
        />
      ) : (
        <img
          src="/11.png"
          className="rounded-circle p-3 shadow"
          width={60}
          height={60}
          alt=""
        />
      )}
    </div>
    <div className="d-flex justify-content-center align-items-center">
      {selected ? (
        <img
          src="/12.png"
          className="rounded-circle p-3 shadow"
          width={60}
          height={60}
          alt=""
        />
      ) : (
        <img
          src="/12.png"
          className="rounded-circle p-3 shadow"
          width={60}
          height={60}
          alt=""
        />
      )}
    </div>
  </div>
);
