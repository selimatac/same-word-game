import React from "react";
import { useNavigate } from "react-router-dom";

const Wellcome = ({ form, setForm }) => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <div className="wellcome">
      <div className="wellcome__container">
        <div className="wellcome__title">
          <h1 className="logo">
            KelimeTik{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
          <h1>ile ingilizce öğrenmeye hazır mısın?</h1>
        </div>
        <form className="wellcome__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nickname"
            required
            placeholder="Takma adın"
            value={form.nickname}
            onChange={(e) => setForm({ ...form, nickname: e.target.value })}
          />
          <select
            name="level"
            required
            onChange={(e) => setForm({ ...form, level: e.target.value })}
            value={form.level}
          >
            <option value="">Seçin</option>
            <option value="Kolay">Kolay</option>
            <option value="Orta">Orta</option>
            <option value="Zor">Zor</option>
          </select>
          <button>Öğrenmeye başla!</button>
        </form>
      </div>
      <div className="wellcome__tip">
        <p>
          Seçtiğin zorluk seviyesine göre ekranda kutucuklar çıkar, kutulara her
          tıkladığında ingilizce kelime görürsün.
        </p>
        <p>
          eğer gördüğün kelimenin hangi kutuda olduğunu hatırlayıp o kutuya
          tıklarsan sana "Türkçe" anlamını gösterecek.
        </p>
        <p> Hadi öğrenmeye başla!:)</p>
      </div>
    </div>
  );
};

export default Wellcome;
