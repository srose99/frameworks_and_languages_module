import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export const Index = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serverURL = (urlParams.get("api") || "").replace(/\/$/, "");

    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
      if (buttonClicked && !serverURL) {
        const missingURL = document.createElement("h1");
        missingURL.textContent =
          "Connect the client to server e.g client url + '?api=' + server url";
        document.body.append(missingURL);
      }
    }, [buttonClicked, serverURL]);

    const [items, setItems] = useState([]);

    const [values, setValues] = useState({
        user_id: "",
        keywords: "",
        description: "",
        image: "",
        lat: "",
        lon: "",
    });

    const handleButtonClick = () => {
      setButtonClicked(true);
    }

    const handleRemoveItem = (itemID) => {
      setItems(items.filter((item) => item.id !== itemID));
    };

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setValues((prev) => ({...prev, [name]: value }));
    };

    const clearForm = () => {
        setValues({
          user_id: "",
          keywords: "",
          description: "",
          image: "",
          lat: "",
          lon: "",
        })
    };

    const displayRes = () => {
        axios.get(`${serverURL}/items`)
            .then(res => {setItems(res.data)})
            .catch(err => console.log(err));
      }

    const submitHandler = (event) => {
        event.preventDefault();
        clearForm();
        axios
            .post(`${serverURL}/item`, values)
            .then(res => console.log("Post successful ",{res}))
            .then(() => displayRes())
            .catch(err => console.log(err));
    };

    const FormItem = ({name, placeholder, value, onChange}) => (
      <div>
        <input
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
    return (
        <div id="app">
          <form onSubmit={submitHandler}>
            <FormItem name="user_id" placeholder="User ID" value={values.user_id} onChange={inputHandler} />
            <FormItem name="keywords" placeholder="Keywords" value={values.keywords} onChange={inputHandler} />
            <FormItem name="description" placeholder="Description" value={values.description} onChange={inputHandler} />
            <FormItem name="image" placeholder="Image URL" value={values.image} onChange={inputHandler} />
            <FormItem name="lat" placeholder="Latitude" value={values.lat} onChange={inputHandler} />
            <FormItem name="lon" placeholder="Longitude" value={values.lon} onChange={inputHandler} />
            <button type="submit" data-action="create_item" onClick={handleButtonClick}>Add</button>
          </form>
          <br></br>
          <br></br>

          {items.map((item, index) => (
            <ul key={index} className="item-list">
              <li key={index} className="item-card">
                <img src={item.image}/>
                <div>
                  <span data-field="id">ID: {item.id}</span>
                  <span data-field="user_id">User: {item.user_id}</span>
                  <span data-field="keywords">Keywords: {item.keywords}</span>
                  <span data-field="description">Description: {item.description}</span>
                  <span data-field="lat">Latitude: {item.lat}</span>
                  <span data-field="lon">Longitude: {item.lon}</span>
                  <span data-field="date_from">Date From: {item.date_from}</span>
                  <button className="btn btn-danger" data-action="delete" onClick={() => handleRemoveItem(item.id)}>
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
    );
}

export default Index;
