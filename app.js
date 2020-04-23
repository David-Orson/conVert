"use strict";
// State
var state = {
    signedIn: "false",
    main: "home",
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
title1.addEventListener("click", function () {
    state.main = "home";
    mainRender(state);
});
// user
// Signing Links
var linksRender = function (state) {
    var signIn = document.createElement("button");
    var signOut = document.createElement("button");
    if (state.signedIn === "false") {
        var out = document.querySelector("#logout");
        if (out) {
            navContainer.removeChild(out);
        }
        signIn.textContent = "SIGNIN";
        signIn.setAttribute("id", "signin");
        signIn.setAttribute("class", "btn");
        navContainer === null || navContainer === void 0 ? void 0 : navContainer.appendChild(signIn);
        signIn.addEventListener("click", function () {
            state.main = "signin";
            mainRender(state);
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
var mainRender = function (state) {
    var main = document.querySelector("#main");
    if (state.main === "home") {
        var signcon = document.querySelector("#sign-container");
        if (signcon) {
            main === null || main === void 0 ? void 0 : main.removeChild(signcon);
        }
        var notcon = document.querySelector("#notifications-container");
        var postcon = document.querySelector("#posts-container");
        if (notcon && postcon) {
        }
        else {
            var notificationsContainer = document.createElement("div");
            var notifications = document.createElement("div");
            var postsContainer = document.createElement("div");
            var posts = document.createElement("div");
            notificationsContainer.setAttribute("id", "notifications-container");
            notifications.setAttribute("id", "card1");
            postsContainer.setAttribute("id", "posts-container");
            posts.setAttribute("id", "card2");
            notificationsContainer.setAttribute("class", "notifications-container");
            notifications.setAttribute("class", "cards");
            postsContainer.setAttribute("class", "posts-container");
            posts.setAttribute("class", "cards");
            main === null || main === void 0 ? void 0 : main.appendChild(notificationsContainer);
            notificationsContainer.appendChild(notifications);
            main === null || main === void 0 ? void 0 : main.appendChild(postsContainer);
            postsContainer.appendChild(posts);
        }
    }
    else if (state.main === "signin") {
        var notcon = document.querySelector("#notifications-container");
        if (notcon) {
            main === null || main === void 0 ? void 0 : main.removeChild(notcon);
        }
        var postcon = document.querySelector("#posts-container");
        if (postcon) {
            main === null || main === void 0 ? void 0 : main.removeChild(postcon);
        }
        var signCon = document.querySelector("#sign-container");
        if (signCon) {
        }
        else {
            var signContainer = document.createElement("div");
            var signer = document.createElement("div");
            var signContent = document.createElement("div");
            var userCont = document.createElement("div");
            var user = document.createElement("img");
            var signQuestion = document.createElement("p");
            signContainer.setAttribute("id", "sign-container");
            signer.setAttribute("id", "signer");
            signContent.setAttribute("id", "sign-content");
            userCont.setAttribute("id", "user-container");
            user.setAttribute("id", "user");
            signQuestion.setAttribute("id", "sQ");
            signContainer.setAttribute("class", "sign-container");
            signer.setAttribute("class", "cards");
            signContent.setAttribute("class", "sign-content");
            userCont.setAttribute("class", "user-container");
            user.setAttribute("class", "user");
            signQuestion.setAttribute("class", "sQ");
            user.setAttribute("src", "./images/logo11.png");
            signQuestion.textContent = "Sign-in as David Orson?";
            var signIn = document.createElement("button");
            signIn.textContent = "SIGNIN";
            signIn.setAttribute("id", "signinFinal");
            signIn.setAttribute("class", "btn");
            main === null || main === void 0 ? void 0 : main.appendChild(signContainer);
            signContainer.appendChild(signer);
            signer.appendChild(signContent);
            signContent.appendChild(userCont);
            userCont.appendChild(user);
            userCont.appendChild(signQuestion);
            signContent.appendChild(signIn);
        }
    }
};
mainRender(state);
