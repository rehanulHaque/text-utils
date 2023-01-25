import React, { useState } from "react";

export default function TextForm(props) {
  const handelOnchange = (e) => {
    setText(e.target.value);
  };
  const handelUpSubmit = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has been capitalize', 'Sucess')
  };
  const handelLwSubmit = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has been Lower', 'Sucess')
  };
  const handelClearSubmit = () => {
    setText("");
    props.showAlert('Text has been Clear', 'Sucess')
  };

  const handelChangeSubmit = (e) => {
    e.preventDefault()
    const changeTo = e.target.elements.changeToWord.value
    let str = text;
    let mapObj = {
      word: changeTo
    };
    str = str.replace(/cat|dog|goat/gi, function(matched){
      return mapObj[matched];
    });
    console.log(str)
  };

  const [email, setEmail] = useState([]);
  const handelEmailsSubmit = () => {
    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const str = [...text.matchAll(regex)];
    setEmail(str);
    email.forEach((email) => {
      const ele = document.createElement("li");
      ele.textContent = email[0];
      document.getElementById("list").appendChild(ele);
    });
  };
  const [text, setText] = useState("Enter Text");





  return (
    <div className="container" style={{color: props.mode === 'light'? 'black':'white',
    backgroundColor: props.mode === 'light'? 'white':'black'
    }}>
      <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Text"
            rows="8"
            value={text}
            onChange={handelOnchange}
            style={{backgroundColor: props.mode === 'light'? 'white':'black', color: props.mode === 'light'? 'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelUpSubmit}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelLwSubmit}>
          Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handelClearSubmit}>
          Clear Text
        </button>
        <button className="btn btn-success mx-2" onClick={handelEmailsSubmit}>
          Extract Emails
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#Modal"
          // onClick={handelChangeSubmit}
        >
          Replace Word
        </button>

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="Modal"
          tabIndex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="ModalLabel">
                  Change Word
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handelChangeSubmit}>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Change Word
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="text"
                      name="word"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Change to Word
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="text"
                      name="changeToWord"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Text Summary</h2>
          <p>
            <b>{text.split(" ").length}</b> Words, <b>{text.length}</b>{" "}
            Caracters, {text.split(" ").length - 1} no of space,{" "}
            {text.split(".").length} no of sentences
          </p>
          <p>
            <b>{0.008 * text.split(" ").length}</b> Minutes Read
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
          <h3>Email List</h3>
          <ul id="list"></ul>
        </div>
      </div>
    </div>
  );
}
