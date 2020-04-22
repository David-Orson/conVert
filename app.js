"use strict";
// Nav
var nav = document.querySelector("#nav");
var navContainer = document.createElement("div");
var title1 = document.createElement("h2");
var title2 = document.createElement("span");
title1.textContent = "con";
title2.textContent = "Vert";
title1.setAttribute("class", "logo");
title2.setAttribute("class", "font-primary");
navContainer.setAttribute("class", "navContainer");
navContainer.appendChild(title1);
title1.appendChild(title2);
nav === null || nav === void 0 ? void 0 : nav.appendChild(navContainer);
