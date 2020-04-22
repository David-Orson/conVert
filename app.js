"use strict";
// State
var state = {
    signedIn: "false",
};
// Nav
var nav = document.querySelector("#nav");
var navContainer = document.createElement("div");
var logoContainer = document.createElement("div");
var title1 = document.createElement("h2");
var title2 = document.createElement("span");
title1.textContent = "con";
title2.textContent = "Vert";
title1.setAttribute("class", "logo");
title2.setAttribute("class", "font-primary");
navContainer.setAttribute("class", "nav-container");
navContainer.appendChild(title1);
title1.appendChild(title2);
nav === null || nav === void 0 ? void 0 : nav.appendChild(navContainer);
// Signing Links
var linksRender = function (state) {
    var signIn = document.createElement("button");
    var signOut = document.createElement("button");
    if (state.signedIn === "false") {
        var out = document.querySelector("#logout");
        if (out) {
            navContainer.removeChild(out);
        }
        else {
        }
        signIn.textContent = "SIGNIN";
        signIn.setAttribute("id", "signin");
        signIn.setAttribute("class", "btn");
        navContainer === null || navContainer === void 0 ? void 0 : navContainer.appendChild(signIn);
        signIn.addEventListener("click", function () {
            state.signedIn = "true";
            linksRender(state);
            console.log("1 " + state.signedIn);
        });
    }
    else {
        var myIn = document.querySelector("#signin");
        if (myIn) {
            navContainer.removeChild(myIn);
        }
        signOut.textContent = "LOGOUT";
        signOut.setAttribute("id", "logout");
        signOut.setAttribute("class", "btn");
        navContainer === null || navContainer === void 0 ? void 0 : navContainer.appendChild(signOut);
        signOut.addEventListener("click", function () {
            state.signedIn = "false";
            linksRender(state);
            console.log("2 " + state.signedIn);
        });
    }
};
linksRender(state);
// Home
var main = document.querySelector("#main");
var notificationsContainer = document.createElement("div");
var notifications = document.createElement("div");
var postsContainer = document.createElement("div");
var posts = document.createElement("div");
notificationsContainer.setAttribute("class", "notifications-container");
notifications.setAttribute("class", "cards");
postsContainer.setAttribute("class", "posts-container");
posts.setAttribute("class", "cards");
main === null || main === void 0 ? void 0 : main.appendChild(notificationsContainer);
notificationsContainer.appendChild(notifications);
main === null || main === void 0 ? void 0 : main.appendChild(postsContainer);
postsContainer.appendChild(posts);
