// Nav

const nav: Element | null = document.querySelector("#nav");
const navContainer = document.createElement("div");
const title1: HTMLElement = document.createElement("h2");
const title2 = document.createElement("span");

title1.textContent = "con";
title2.textContent = "Vert";

title1.setAttribute("class", "logo");
title2.setAttribute("class", "font-primary");
navContainer.setAttribute("class", "navContainer");

navContainer.appendChild(title1);
title1.appendChild(title2);

nav?.appendChild(navContainer);
