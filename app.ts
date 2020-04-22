// Nav

const nav: HTMLElement | null = document.querySelector("#nav");
const navContainer = document.createElement("div");
const logoContainer = document.createElement("div");
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

// Home

const main: HTMLElement | null = document.querySelector("#main");

const notificationsContainer = document.createElement("div");
const notifications = document.createElement("div");
const postsContainer = document.createElement("div");
const posts = document.createElement("div");

notificationsContainer.setAttribute("class", "notifications-container");
notifications.setAttribute("class", "cards");
postsContainer.setAttribute("class", "posts-container");
posts.setAttribute("class", "cards");

main?.appendChild(notificationsContainer);
notificationsContainer.appendChild(notifications);

main?.appendChild(postsContainer);
postsContainer.appendChild(posts);
