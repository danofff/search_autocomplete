import { useState, useEffect } from "react";

import Container from "./Components/UI/Container/Container";
import FormControl from "./Components/FormControl/FormControl";
import List from "./Components/List/List";

import logo from "./g_logo.svg";
import "./App.css";

const drugs = [
  "Abreva",
  "Acetaminophen",
  "Accolate",
  "Accuneb",
  "Accupril",
  "Accutane",
  "Claritin",
  "Hepatitis B Vaccine",
  "Ibuprofen",
  "Loratadine",
  "Simethicone",
  "Tylenol",
  "Tylenox",
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);
  const [autoCompleteList, setAutocompleteState] = useState([]);

  const dummyOnAutocompleteClick = (drug) => {
    console.log(drug);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      //fetch api with inputValue;
      if (inputValue.length) {
        let searchedDrugs = drugs.filter((drug) => {
          return drug.toLowerCase().startsWith(inputValue.toLowerCase());
        });

        setAutocompleteState(searchedDrugs);
      } else {
        setAutocompleteState([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="App">
      <Container>
        <picture className="logo-img">
          <img src={logo} alt="logo" load="lazy" />
          <h3>NOT SO</h3>
        </picture>
        <div className="search-wrapper">
          <FormControl
            value={inputValue}
            setValue={setInputValue}
            placeholder="Search drug..."
            isFound={autoCompleteList.length !== 0 && isInputOnFocus}
            handleFocus={setIsInputOnFocus}
          />
          <List
            drugs={autoCompleteList}
            isActive={autoCompleteList.length > 0 && isInputOnFocus}
            onListElementClick={dummyOnAutocompleteClick}
          />
        </div>
      </Container>
    </div>
  );
}
