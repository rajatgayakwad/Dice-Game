
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RoleDice from './RoleDice';
import{ useState } from "react";
import Button from './../../../project-2/src/component/Button/Button';
import Rules from './Rules';    

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectNumber, setSelectNumber] = useState();

    const [currentDice, setCurrentDice] = useState(1);

    const [error, setError] = useState("");

    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = ( min , max ) => {
       
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {

        if(!selectNumber) {
            setError("You have not selected any number");
            return;
        }
      

        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);

        if(selectNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    };

    return (
        <MainContainer>
            <div className="top_section">
            <TotalScore
            score={score}/>
           
           <NumberSelector
           setError={setError}
           error={error}
           selectNumber={selectNumber}
           setSelectNumber={setSelectNumber}
           />
            </div>
            <RoleDice
            roleDice={roleDice}
            currentDice={currentDice}
            />

            <div className="btns">
               <button onClick={resetScore}>Reset</button>
               <button onClick={() => setShowRules((prev) => !prev)}>
                {showRules ? "Hide" : "Show Rules"}</button>
            </div>
          
            {showRules && <Rules/>}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }


    .btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px

}
`;

