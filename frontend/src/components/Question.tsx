import React from "react";

export function Question() {
  return (
    <div className="border border-primary my-4 mx-5 container">
      <div className="row">
        <img
          className="col-1"
          width="100px"
          height="100px"
          src="https://wg.grechkogv.ru/assets/2.jpg"
          alt=""
        ></img>
        <div className="col-11">
          <a href="ya.ru">
            {" "}
            Это ссылка на страницу вопроса
            <br />
          </a>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
        </div>
        <div className="row">
            <input type="number" name="number" id="1212" className="col-1" style={{display:'inline'}}/>
            <a href="ya.ru">Ответы(3)</a>
        </div>
      </div>
    </div>
  );
}
