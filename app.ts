// State

const state = {
  signedIn: "false",
  main: "home",
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

title1.addEventListener("click", () => {
  state.main = "home";
  mainRender(state);
});

// user

// Signing Links

const linksRender = (state: any) => {
  const signIn = document.createElement("button");
  const signOut = document.createElement("button");
  if (state.signedIn === "false") {
    let out = document.querySelector("#logout");
    if (out) {
      navContainer.removeChild(out);
    }
    signIn.textContent = "SIGNIN";
    signIn.setAttribute("id", "signin");
    signIn.setAttribute("class", "btn");

    navContainer?.appendChild(signIn);

    signIn.addEventListener("click", () => {
      state.main = "signin";
      mainRender(state);
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

const mainRender = (state: any) => {
  const main: HTMLElement | null = document.querySelector("#main");
  if (state.main === "home") {
    let signcon = document.querySelector("#sign-container");
    if (signcon) {
      main?.removeChild(signcon);
    }
    let notcon = document.querySelector("#notifications-container");
    let postcon = document.querySelector("#posts-container");
    if (notcon && postcon) {
    } else {
      const notificationsContainer = document.createElement("div");
      const notifications = document.createElement("div");
      const postsContainer = document.createElement("div");
      const posts = document.createElement("div");

      notificationsContainer.setAttribute("id", "notifications-container");
      notifications.setAttribute("id", "card1");
      postsContainer.setAttribute("id", "posts-container");
      posts.setAttribute("id", "card2");

      notificationsContainer.setAttribute("class", "notifications-container");
      notifications.setAttribute("class", "cards");
      postsContainer.setAttribute("class", "posts-container");
      posts.setAttribute("class", "cards");

      main?.appendChild(notificationsContainer);
      notificationsContainer.appendChild(notifications);

      main?.appendChild(postsContainer);
      postsContainer.appendChild(posts);
    }
  } else if (state.main === "signin") {
    let notcon = document.querySelector("#notifications-container");
    if (notcon) {
      main?.removeChild(notcon);
    }
    let postcon = document.querySelector("#posts-container");
    if (postcon) {
      main?.removeChild(postcon);
    }
    let signCon = document.querySelector("#sign-container");
    if (signCon) {
    } else {
      const signContainer = document.createElement("div");
      const signer = document.createElement("div");
      const signContent = document.createElement("div");
      let userCont = document.createElement("div");
      let user = document.createElement("img");
      const signQuestion = document.createElement("p");

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

      let signIn = document.createElement("button");

      signIn.textContent = "SIGNIN";
      signIn.setAttribute("id", "signinFinal");
      signIn.setAttribute("class", "btn");

      main?.appendChild(signContainer);
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
