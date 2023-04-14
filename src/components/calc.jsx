import {React, useState} from "react";

var valueT= '';

const Calc = (props) => {
  const [txt, settxt] = useState('0');

  const whenClick = (a) => {
    valueT += a;
    settxt(valueT);
  }

  return (
    <>
      <div className="scr">
        {txt}
      </div>
      <div className="btns">
        <table>
          <tr>
            <td>
              <button onClick={
                ()=> {
                    whenClick('1')
                  }
                }>1</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('2')
                  }
                }>2</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('3')
                  }
                }>3</button>
            </td>
            <td>
              <button className="op" onClick={
                ()=> {
                    whenClick('+')
                  }
                }>+</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={
                ()=> {
                    whenClick('4')
                  }
                }>4</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('5')
                  }
                }>5</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('6')
                  }
                }>6</button>
            </td>
            <td>
              <button className="op" onClick={
                ()=> {
                    whenClick('-')
                  }
                }>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={
                ()=> {
                    whenClick('7')
                  }
                }>7</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('8')
                  }
                }>8</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('9')
                  }
                }>9</button>
            </td>
            <td>
              <button className="op" onClick={
                ()=> {
                    whenClick('*')
                  }
                }>×</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={
                ()=> {
                    whenClick('.')
                  }
                }>.</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('0')
                  }
                }>0</button>
            </td>
            <td>
              <button onClick={
                ()=> {
                    whenClick('**')
                  }
                }>^</button>
            </td>
            <td>
              <button className="op" onClick={
                ()=> {
                    whenClick('/')
                  }
                }>÷</button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="op" onClick={()=>
                {
                    whenClick('='+(eval(txt)))
                  }
                }>=</button>
            </td>
            <td>
              <button className="op" onClick={
                ()=> {
                    valueT = (<br/>)
                    settxt(valueT)
                    valueT = ''
                  }
                }>C</button>
            </td>
            <td>
              <button className="op" onClick={
                ()=> {
                    alert('Made by:\nmohamed hossam.')
                  }
                }>?</button>
            </td>
          </tr>
        </table>
        
      </div>
    </>
  );
};

export default Calc;
