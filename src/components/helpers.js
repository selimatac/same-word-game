const levels = {
  Kolay: {
    minLength: 5,
    maxLength: 10,
    limit: 10,
  },
  Orta: {
    minLength: 5,
    maxLength: 20,
    limit: 20,
  },
  Zor: {
    minLength: 10,
    maxLength: 30,
    limit: 30,
  },
};

const exampleData = [
  {
    id: 0,
    word: "deflagrate",
  },
  {
    id: 0,
    word: "skinnies",
  },
  {
    id: 0,
    word: "jovial",
  },
  {
    id: 0,
    word: "emmas",
  },
  {
    id: 0,
    word: "winter-proud",
  },
  {
    id: 0,
    word: "appropriable",
  },
  {
    id: 0,
    word: "nervousness",
  },
  {
    id: 0,
    word: "overhanded",
  },
  {
    id: 0,
    word: "inspirometer",
  },
  {
    id: 0,
    word: "opisthograph",
  },
];

const mixArray = (o) => {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

const onUnload = (e) => {
  e.preventDefault();
  e.returnValue = "";
};

const translateWord = async (word) => {
  const result = await fetch(`https://tureng-api.vercel.app/api/${word}`, {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    .then((result) => result.json())
    .then((data) => data)
    .catch((err) => err);
  return result;
};

const createUrl = (level) =>
  `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=verb&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=${
    levels[level]?.minLength || "5"
  }&maxLength=${levels[level]?.maxLength || "10"}&limit=${
    levels[level]?.limit || "10"
  }&api_key=${process.env.REACT_APP_API_KEY}`;

export { levels, exampleData, createUrl, mixArray, onUnload, translateWord };
