import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUrl,
  exampleData,
  mixArray,
  onUnload,
  translateWord,
} from "../components/helpers";

const Gaming = ({ form }) => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [knowns, setKnowns] = useState([]);
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  useEffect(() => {
    if (!form.nickname && !form.level) {
      navigate("/");
    }
  }, [form, navigate]);
  useEffect(() => {
    knowns.length > 0 && window.addEventListener("beforeunload", onUnload);
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, [knowns]);

  useEffect(() => {
    fetch(createUrl(form.level))
      .then((response) => response.json())
      .then((data) => setWords(data));
  }, [form.level]);

  useEffect(() => {
    setData(mixArray([...words, ...words]));
  }, [words]);
  return (
    <div className="game">
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
      <div className="game__boxes">
        {data?.map((item, index) => (
          <div className="perspective">
            <div
              className={`game__box ${
                knowns.includes(item.word) ? "-match" : ""
              } ${index === selectedIndex ? "-open" : ""}`}
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                if (!knowns.includes(item.word) && selectedIndex !== index) {
                  selectedWord === item.word
                    ? setKnowns([...knowns, item.word])
                    : setSelectedWord(item.word);
                } else {
                  setClickCount(clickCount + 1);
                }
              }}
            >
              {knowns.includes(item.word) || index === selectedIndex ? (
                <span className="-word">{item.word}</span>
              ) : (
                <span className="-question">?</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>Bulunan kelimeler</h1>
        {knowns.reverse().map((item, index) => {
          return (
            <div key={index}>
              {index + 1}: {item} : {translateWord(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gaming;
