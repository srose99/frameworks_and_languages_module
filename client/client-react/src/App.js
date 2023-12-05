import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [inputs, setInputs] = useState({
    inputUserID: "",
    inputKeywords: "",
    inputDescription: "",
    inputImage: "",
    inputLat: "",
    inputLon: ""
  });

  const clearInputs = () => {
    setInputs({
      inputUserID: "",
      inputKeywords: "",
      inputDescription: "",
      inputImage: "",
      inputLat: "",
      inputLon: ""
    });
  };

  const postItem = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serverURL = (urlParams.get("api") || "").replace(/\/$/, "");

    if (serverURL) {
      const inputData = {
        user_id: inputs.inputUserID,
        keywords: inputs.inputKeywords,
        description: inputs.inputDescription,
        image: inputs.inputImage,
        lat: inputs.inputLat,
        lon: inputs.inputLon
      };

      axios
        .post(`${serverURL}/item`, inputData)
        .then(response => {
          const{data}=response;
          const ul=document.createElement("ul");
          ul.className="item-list";

          const li=document.createElement("li");
          li.className="item-card";
          li.dataset.itemID=data.id;

          const image=document.createElement("img");
          image.src=data.image;
          image.alt="Image of a Cat";
          image.className="cars-img-top img-fluid";

          const idSpan = document.createElement("span");
          idSpan.dataset.field = "id";
          idSpan.textContent = `ID: ${data.id}`;

          const useridSpan = document.createElement("span");
          useridSpan.dataset.field = "user id";
          useridSpan.textContent = `UserID: ${data.user_id}`;

          const keywordsSpan = document.createElement("span");
          keywordsSpan.dataset.field = "keywords";
          keywordsSpan.textContent = `Keywords: ${data.keywords}`;

          const descriptionSpan = document.createElement("span");
          descriptionSpan.dataset.field = "description";
          descriptionSpan.textContent = `Description: ${data.description}`;

          const dateSpan = document.createElement("span");
          dateSpan.dataset.field = "date from";
          dateSpan.textContent = `Date from: ${data.date_from}`;

          const latSpan = document.createElement("span");
          latSpan.dataset.field = "lat";
          latSpan.textContent = `Lat: ${data.lat}`;

          const lonSpan = document.createElement("span");
          lonSpan.dataset.field = "lon";
          lonSpan.textContent = `Lon: ${data.lon}`;

          const removeButton = document.createElement("button");
          removeButton.textContent = "Remove";
          removeButton.className = "btn btn-danger";
          removeButton.dataset.action = "delete";
          removeButton.addEventListener("click", () => {
            container.removeChild(ul);
          });

          li.append(image);
          li.append(idSpan);
          li.append(useridSpan);
          li.append(keywordsSpan);
          li.append(descriptionSpan);
          li.append(dateSpan);
          li.append(latSpan);
          li.append(lonSpan);
          li.append(removeButton);

          ul.append(li);
          container.appendChild(ul);

          clearInputs();

          
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error(
        "Connect the client to server e.g client url + '?api=' + server url"
      );
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    postItem();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div id="app">
      <h1>Freecycle</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              UserID:
            </span>
          </div>
          <input
            type="text"
            id="input1"
            name="inputUserID"
            className="form-control"
            value={inputs.inputUserID}
            onChange={handleInputChange}
            aria-label="UserID"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Keywords:
            </span>
          </div>
          <input
            type="text"
            id="input2"
            name="inputKeywords"
            className="form-control"
            value={inputs.inputKeywords}
            onChange={handleInputChange}
            aria-label="Keywords"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Description:
            </span>
          </div>
          <input
            type="text"
            id="input3"
            name="inputDescription"
            className="form-control"
            value={inputs.inputDescription}
            onChange={handleInputChange}
            aria-label="Description"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Image:
            </span>
          </div>
          <input
            type="text"
            id="input4"
            name="inputImage"
            className="form-control"
            value={inputs.inputImage}
            onChange={handleInputChange}
            aria-label="Image"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Latitude:
            </span>
          </div>
          <input
            type="text"
            id="input5"
            name="inputLat"
            className="form-control"
            value={inputs.inputLat}
            onChange={handleInputChange}
            aria-label="Latitude"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Longitude:
            </span>
          </div>
          <input
            type="text"
            id="input6"
            name="inputLon"
            className="form-control"
            value={inputs.inputLon}
            onChange={handleInputChange}
            aria-label="Longitude"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <button
          type="submit"
          className="btn btn-success"
          data-action="create_item"
        >
          Add Item
        </button>
      </form>
      <div id="container"></div>
    </div>
  );
};

export default App;