import React, { useEffect, useState, useRef } from "react";

const PassGenerator = () => {
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null);
  let pass = "";
  let WordStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllow) {
    WordStr = WordStr + "0123456789";
  }
  if (charAllow) WordStr += "!@#$%^&*+{}[]?";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * WordStr.length + 1);
    pass += WordStr.charAt(char);
    console.log(char);
  }

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("password copy to clipboard");
  };

  useEffect(() => {
    setPassword(pass);
  }, [numberAllow, charAllow, length, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password$Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onClick={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};
export default PassGenerator;
