import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrashCan,
  faMarker,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [files, setFiles] = useState([
    {
      name: "Paul",
      likes: 2,
      comment: "Great App",
    },
    {
      name: "Peter",
      likes: 4,
      comment: "wow App",
    },
    {
      name: "Jade",
      likes: 3,
      comment: "wow App",
    },
  ]);
  console.log(files);
  const [inputUser, setInputUser] = useState("");
  const [inputComment, setInputComment] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const newFile = {
      name: inputUser,
      likes: 0,
      comment: inputComment,
    };

    const newFiles = [...files, newFile];
    setFiles(newFiles);
    setInputUser("");
    setInputComment("");
  };

  const handleLikesDecrease = (index) => {
    const newFiles = [...files];

    newFiles[index].likes--;

    setFiles(newFiles);
  };

  const handleLikesIncrease = (index) => {
    const newFiles = [...files];

    newFiles[index].likes++;

    setFiles(newFiles);
  };

  const HandleDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const HandleEdit = (index) => {
    const newFiles = [...files];
    setInputUser(newFiles[index].name);
    setInputComment(newFiles[index].comment);
    newFiles.splice(index, 1);
    // newFiles.splice(index, 0, newFile);
    setFiles(newFiles);
  };

  return (
    <div className="app-container">
      <div className="title">
        <h1>Comments</h1>
      </div>
      <div className="comment">
        {files.map((item, index) => (
          <div className="upper-card-container">
            <div className="like-comment-box">
              <div className="likes">
                <h5 onClick={() => handleLikesIncrease(index)}>+</h5>
                <h5>{item.likes}</h5>

                <h5 onClick={() => handleLikesDecrease(index)}>-</h5>
              </div>
              {console.log(index)}
              <div>
                <div className="comment-box">
                  <div className="upper-card-title">
                    <div className="name-svg">
                      <FontAwesomeIcon className="svg-name" icon={faUser} />
                      <span className="name">{item.name}</span>
                    </div>
                    <div className="delete-edit">
                      <button
                        className="butt-del-edit"
                        onClick={() => HandleDelete(index)}
                      >
                        <FontAwesomeIcon
                          className="svg-delete"
                          icon={faTrashCan}
                        />{" "}
                        <span className="delete">Delete</span>
                      </button>
                      <button
                        className="butt-del-edit"
                        onClick={() => HandleEdit(index)}
                      >
                        {" "}
                        <FontAwesomeIcon className="svg-edit" icon={faMarker} />
                        <span> Edit</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="comment">{item.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form className="form" onSubmit={HandleSubmit}>
        <textarea
          className="form-field"
          id=""
          cols="40"
          rows="3"
          value={inputComment}
          placeholder="Enter comment"
          onChange={(e) => setInputComment(e.target.value)}
        />

        <input
          className="form-field"
          type="text"
          placeholder="Enter name"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
        />
        <button type="submit" className="form-field" id="send">
          Send
        </button>
      </form>
    </div>
  );
};

export default App;
