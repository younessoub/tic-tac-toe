import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);
  const [player, setPlayer] = useState(true);

  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");

  const [colorOne, setColorOne] = useState(false);
  const [colorTwo, setColorTwo] = useState(false);
  const [colorThree, setColorThree] = useState(false);
  const [colorFour, setColorFour] = useState(false);
  const [colorFive, setColorFive] = useState(false);
  const [colorSix, setColorSix] = useState(false);
  const [colorSeven, setColorSeven] = useState(false);
  const [colorEight, setColorEight] = useState(false);
  const [colorNine, setColorNine] = useState(false);

  useEffect(() => {
    const reset = () => {
      setPlayer((p) => p);
      setOne("");
      setTwo("");
      setThree("");
      setFour("");
      setFive("");
      setSix("");
      setSeven("");
      setEight("");
      setNine("");
    };
    if (one === two && one === three && one && two && three) {
      if (one === "X") {
        setScoreOne((s) => s + 1);
        setColorOne(true);
        setColorTwo(true);
        setColorThree(true);
        setTimeout(() => {
          reset();
          setColorOne(false);
          setColorTwo(false);
          setColorThree(false);
        }, 500);

        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorOne(true);
        setColorTwo(true);
        setColorThree(true);
        setTimeout(() => {
          reset();
          setColorOne(false);
          setColorTwo(false);
          setColorThree(false);
        }, 500);

        return;
      }
    }
    if (four === five && four === six && four && five && six) {
      if (four === "X") {
        setScoreOne((s) => s + 1);
        setColorFour(true);
        setColorFive(true);
        setColorSix(true);
        setTimeout(() => {
          reset();
          setColorFour(false);
          setColorFive(false);
          setColorSix(false);
        }, 500);

        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorFour(true);
        setColorFive(true);
        setColorSix(true);
        setTimeout(() => {
          reset();
          setColorFour(false);
          setColorFive(false);
          setColorSix(false);
        }, 500);

        return;
      }
    }
    if (seven === eight && seven === nine && seven && eight && nine) {
      if (seven === "X") {
        setScoreOne((s) => s + 1);
        setColorSeven(true);
        setColorEight(true);
        setColorNine(true);
        setTimeout(() => {
          reset();
          setColorSeven(false);
          setColorEight(false);
          setColorNine(false);
        }, 500);

        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorSeven(true);
        setColorEight(true);
        setColorNine(true);
        setTimeout(() => {
          reset();
          setColorSeven(false);
          setColorEight(false);
          setColorNine(false);
        }, 500);
        return;
      }
    }
    if (one === four && one === seven && one && four && seven) {
      if (one === "X") {
        setScoreOne((s) => s + 1);
        setColorOne(true);
        setColorFour(true);
        setColorSeven(true);
        setTimeout(() => {
          reset();
          setColorOne(false);
          setColorFour(false);
          setColorSeven(false);
        }, 500);

        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorOne(true);
        setColorFour(true);
        setColorSeven(true);
        setTimeout(() => {
          reset();
          setColorOne(false);
          setColorFour(false);
          setColorSeven(false);
        }, 500);

        return;
      }
    }
    if (two === five && two === eight && two && five && eight) {
      if (two === "X") {
        setScoreOne((s) => s + 1);
        setColorTwo(true);
        setColorFive(true);
        setColorEight(true);
        setTimeout(() => {
          reset();
          setColorTwo(false);
          setColorFive(false);
          setColorEight(false);
        }, 500);
        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorTwo(true);
        setColorFive(true);
        setColorEight(true);
        setTimeout(() => {
          reset();
          setColorTwo(false);
          setColorFive(false);
          setColorEight(false);
        }, 500);

        return;
      }
    }
    if (three === six && three === nine && three && six && nine) {
      if (three === "X") {
        setScoreOne((s) => s + 1);
        setColorThree(true);
        setColorSix(true);
        setColorNine(true);
        setTimeout(() => {
          reset();
          setColorThree(false);
          setColorSix(false);
          setColorNine(false);
        }, 500);

        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorThree(true);
        setColorSix(true);
        setColorNine(true);
        setTimeout(() => {
          reset();
          setColorThree(false);
          setColorSix(false);
          setColorNine(false);
        }, 500);

        return;
      }
    }
    if (one === five && one === nine && one && five && nine) {
      if (one === "X") {
        setScoreOne((s) => s + 1);
        setColorOne(true);
        setColorFive(true);
        setColorNine(true);
        setTimeout(() => {
          reset();
          setColorOne(false);
          setColorFive(false);
          setColorNine(false);
        }, 500);

        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorOne(true);
        setColorFive(true);
        setColorNine(true);
        setTimeout(() => {
          reset();
          setColorOne(false);
          setColorFive(false);
          setColorNine(false);
        }, 500);

        return;
      }
    }
    if (three === five && three === seven && three && five && seven) {
      if (three === "X") {
        setScoreOne((s) => s + 1);
        setColorThree(true);
        setColorFive(true);
        setColorSeven(true);
        setTimeout(() => {
          reset();
          setColorThree(false);
          setColorFive(false);
          setColorSeven(false);
        }, 500);
        return;
      } else {
        setScoreTwo((s) => s + 1);
        setColorThree(true);
        setColorFive(true);
        setColorSeven(true);
        setTimeout(() => {
          reset();
          setColorThree(false);
          setColorFive(false);
          setColorSeven(false);
        }, 500);

        return;
      }
    }

    if (one && two && three && four && five && six && seven && eight && nine) {
      reset();
    }
  }, [one, two, three, four, five, six, seven, eight, nine]);

  return (
    <div className="App">
      <div className="wrapper">
        <h1 style={{ marginBottom: "20px" }}>Tic-Tac-Toe</h1>
        <p style={{ color: "turquoise" }}>Score</p>
        <div className="score">
          <div
            className="scoreCard"
            style={
              player
                ? { borderColor: "white", boxShadow: "0 0 20px white" }
                : null
            }
          >
            <div className="symbols">X</div>
            <div>{scoreOne}</div>
          </div>
          <div
            className="scoreCard "
            style={
              player
                ? null
                : { borderColor: "white", boxShadow: "0 0 20px white" }
            }
          >
            <div>{scoreTwo}</div>
            <div className="symbols">O</div>
          </div>
        </div>
        <div className="game">
          <div
            onClick={() => {
              if (!one) {
                if (player) {
                  setOne("X");
                  setPlayer(!player);
                } else {
                  setOne("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorOne ? { background: "green" } : null}
          >
            {one}
          </div>
          <div
            onClick={() => {
              if (!two) {
                if (player) {
                  setTwo("X");
                  setPlayer(!player);
                } else {
                  setTwo("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorTwo ? { background: "green" } : null}
          >
            {two}
          </div>
          <div
            onClick={() => {
              if (!three) {
                if (player) {
                  setThree("X");
                  setPlayer(!player);
                } else {
                  setThree("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorThree ? { background: "green" } : null}
          >
            {three}
          </div>
          <div
            onClick={() => {
              if (!four) {
                if (player) {
                  setFour("X");
                  setPlayer(!player);
                } else {
                  setFour("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorFour ? { background: "green" } : null}
          >
            {four}
          </div>
          <div
            onClick={() => {
              if (!five) {
                if (player) {
                  setFive("X");
                  setPlayer(!player);
                } else {
                  setFive("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorFive ? { background: "green" } : null}
          >
            {five}
          </div>
          <div
            onClick={() => {
              if (!six) {
                if (player) {
                  setSix("X");
                  setPlayer(!player);
                } else {
                  setSix("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorSix ? { background: "green" } : null}
          >
            {six}
          </div>
          <div
            onClick={() => {
              if (!seven) {
                if (player) {
                  setSeven("X");
                  setPlayer(!player);
                } else {
                  setSeven("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorSeven ? { background: "green" } : null}
          >
            {seven}
          </div>
          <div
            onClick={() => {
              if (!eight) {
                if (player) {
                  setEight("X");
                  setPlayer(!player);
                } else {
                  setEight("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorEight ? { background: "green" } : null}
          >
            {eight}
          </div>
          <div
            onClick={() => {
              if (!nine) {
                if (player) {
                  setNine("X");
                  setPlayer(!player);
                } else {
                  setNine("O");
                  setPlayer(!player);
                }
              }
            }}
            style={colorNine ? { background: "green" } : null}
          >
            {nine}
          </div>
        </div>
      </div>
    </div>
  );
}
