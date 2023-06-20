// Copyright (c) 2023 william simard All rights reserved
//
// Created by: william simard
// Created on: jun 2023
// This file contains the JS functions for index.html

fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.message;
    // Use the imageUrl to display the image on your website
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    document.body.appendChild(imageElement);
  })
  .catch(error => {
    console.log("Error fetching dog image:", error);
  });