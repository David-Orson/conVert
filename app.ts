// State

const state = {
  signedIn: "false",
};

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
navContainer.setAttribute("class", "nav-container");

navContainer.appendChild(title1);
title1.appendChild(title2);

nav?.appendChild(navContainer);

// Signing Links

const linksRender = (state: any) => {
  const signIn = document.createElement("button");
  const signOut = document.createElement("button");
  if (state.signedIn === "false") {
    let out = document.querySelector("#logout");
    if (out) {
      navContainer.removeChild(out);
    } else {
    }
    signIn.textContent = "SIGNIN";
    signIn.setAttribute("id", "signin");
    signIn.setAttribute("class", "btn");

    navContainer?.appendChild(signIn);

    signIn.addEventListener("click", () => {
      state.signedIn = "true";
      linksRender(state);
      console.log(`1 ${state.signedIn}`);
    });
  } else {
    let myIn = document.querySelector("#signin");

    if (myIn) {
      navContainer.removeChild(myIn);
    }
    signOut.textContent = "LOGOUT";
    signOut.setAttribute("id", "logout");
    signOut.setAttribute("class", "btn");

    navContainer?.appendChild(signOut);

    signOut.addEventListener("click", () => {
      state.signedIn = "false";
      linksRender(state);
      console.log(`2 ${state.signedIn}`);
    });
  }
};

linksRender(state);

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
