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
  console.log(state);
  const signIn = document.createElement("button");

  const signedInLinks = document.createElement("div");
  const signOut = document.createElement("button");
  const user = document.createElement("img");
  const userName = document.createElement("span");
  if (state.signedIn === "false") {
    let out = document.querySelector("#signedIn");
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
    });
  } else {
    let myIn = document.querySelector("#signin");

    if (myIn) {
      navContainer.removeChild(myIn);
    }
    signedInLinks.setAttribute("id", "signedIn");
    signedInLinks.setAttribute("class", "signedIn");

    signOut.textContent = "LOGOUT";
    signOut.setAttribute("id", "logout");
    signOut.setAttribute("class", "btn");

    user.setAttribute("id", "user");
    user.setAttribute("src", "./images/logo11.png");
    user.setAttribute("class", "user");
    user.setAttribute("height", "50px");
    user.setAttribute("width", "50px");

    userName.setAttribute("id", "user-name");
    userName.setAttribute("class", "user-name");

    userName.textContent = "USER1";

    navContainer?.appendChild(signedInLinks);
    signedInLinks?.appendChild(user);
    signedInLinks?.appendChild(userName);
    signedInLinks?.appendChild(signOut);

    signOut.addEventListener("click", () => {
      state.signedIn = "false";
      linksRender(state);
      mainRender(state);
    });
  }
};

linksRender(state);

// Home

const mainRender = (state: any) => {
  console.log(state);
  const main: HTMLElement | null = document.querySelector("#main");
  if (state.main === "home") {
    if (state.signedIn === "true") {
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
        let content = document.createElement("div");
        let content2 = document.createElement("div");
        const notiTitle = document.createElement("h2");
        const tempTitle = document.createElement("h2");
        let convertContainer1 = document.createElement("div");
        const celContainer = document.createElement("div");
        const fahContainer = document.createElement("div");
        const celTitle = document.createElement("h4");
        const fahTitle = document.createElement("h4");
        const celInput = document.createElement("input");
        const fahInput = document.createElement("input");

        notificationsContainer.setAttribute("id", "notifications-container");
        notifications.setAttribute("id", "card1");
        postsContainer.setAttribute("id", "posts-container");
        posts.setAttribute("id", "card2");
        content.setAttribute("id", "noti-content");
        content2.setAttribute("id", "convert1-content");
        notiTitle.setAttribute("id", "title--noti");
        tempTitle.setAttribute("id", "title--temp");
        convertContainer1.setAttribute("id", "temp-container");
        celContainer.setAttribute("id", "cel-container");
        fahContainer.setAttribute("id", "fah-container");
        celTitle.setAttribute("id", "title--cel");
        fahTitle.setAttribute("id", "title--fah");
        celInput.setAttribute("id", "cel-input");
        fahInput.setAttribute("id", "fah-input");

        notificationsContainer.setAttribute("class", "notifications-container");
        notifications.setAttribute("class", "cards");
        postsContainer.setAttribute("class", "posts-container");
        posts.setAttribute("class", "cards");
        content.setAttribute("class", "noti-content");
        content2.setAttribute("class", "convert1-content");
        notiTitle.setAttribute("class", "title--noti");
        tempTitle.setAttribute("class", "title--temp");
        convertContainer1.setAttribute("class", "temp-container");
        celContainer.setAttribute("class", "cel-container");
        fahContainer.setAttribute("class", "fah-container");
        celTitle.setAttribute("class", "title--cel");
        fahTitle.setAttribute("class", "title--fah");
        celInput.setAttribute("class", "cel-input");
        fahInput.setAttribute("class", "fah-input");
        celInput.setAttribute("type", "text");
        fahInput.setAttribute("type", "text");

        notiTitle.textContent = "Notifications";
        tempTitle.textContent = "Temperature Converter";
        celTitle.textContent = "Celsius";
        fahTitle.textContent = "Fahrenheit";

        main?.appendChild(notificationsContainer);
        notificationsContainer.appendChild(notifications);
        notifications.appendChild(content);
        content.appendChild(notiTitle);

        main?.appendChild(postsContainer);
        postsContainer.appendChild(posts);
        posts.appendChild(content2);
        content2.appendChild(tempTitle);
        content2.appendChild(convertContainer1);
        convertContainer1.appendChild(celContainer);
        convertContainer1.appendChild(fahContainer);
        celContainer.appendChild(celTitle);
        fahContainer.appendChild(fahTitle);
        celContainer.appendChild(celInput);
        fahContainer.appendChild(fahInput);

        const celVal: HTMLInputElement | null = document.querySelector(
          '.cel-input[type="text"]'
        );
        const fahVal: HTMLInputElement | null = document.querySelector(
          '.fah-input[type="text"]'
        );

        const roundFloat = (num: number) => Math.round(num * 1000) / 1000;

        celVal?.addEventListener("input", () => {
          const cVal: number = parseFloat(celVal.value);
          const fVal: number = cVal * (9 / 5) + 32;

          if (!fVal) {
            (<HTMLInputElement>document.getElementById("fah-input")).value = "";
          } else {
            (<HTMLInputElement>(
              document.getElementById("fah-input")
            )).value = roundFloat(fVal).toString();
          }
        });

        fahVal?.addEventListener("input", () => {
          const fVal: number = parseFloat(fahVal.value);
          const cVal: number = (fVal - 32) * (5 / 9);

          if (!cVal) {
            (<HTMLInputElement>document.getElementById("cel-input")).value = "";
          } else {
            (<HTMLInputElement>(
              document.getElementById("cel-input")
            )).value = roundFloat(cVal).toString();
          }
        });
      }
    } else {
      let signcon = document.querySelector("#sign-container");
      if (signcon) {
        main?.removeChild(signcon);
      }
      let notcon = document.querySelector("#notifications-container");
      let postcon = document.querySelector("#posts-container");
      if (notcon && postcon) {
        main?.removeChild(notcon);
        main?.removeChild(postcon);
      }
      const notificationsContainer = document.createElement("div");
      const notifications = document.createElement("div");
      const postsContainer = document.createElement("div");
      const posts = document.createElement("div");
      let content = document.createElement("div");
      let content2 = document.createElement("div");
      const notiTitle = document.createElement("h2");
      const tempTitle = document.createElement("h2");
      const offline = document.createElement("p");
      const offline2 = document.createElement("p");

      notificationsContainer.setAttribute("id", "notifications-container");
      notifications.setAttribute("id", "card1");
      postsContainer.setAttribute("id", "posts-container");
      posts.setAttribute("id", "card2");
      content.setAttribute("id", "noti-content");
      content2.setAttribute("id", "convert1-content");
      notiTitle.setAttribute("id", "title--noti");
      tempTitle.setAttribute("id", "title--temp");
      offline.setAttribute("id", "offline-text");
      offline2.setAttribute("id", "offline-text2");

      notificationsContainer.setAttribute("class", "notifications-container");
      notifications.setAttribute("class", "cards");
      postsContainer.setAttribute("class", "posts-container");
      posts.setAttribute("class", "cards");
      content.setAttribute("class", "noti-content");
      content2.setAttribute("class", "convert1-content");
      notiTitle.setAttribute("class", "title--noti");
      tempTitle.setAttribute("class", "title--temp");
      offline.setAttribute("class", "offline-text");
      offline2.setAttribute("class", "offline-text2");

      notiTitle.textContent = "Notifications";
      tempTitle.textContent = "Temperature Converter";
      offline.textContent = "Please sign in to view Notifications";
      offline2.textContent = "Please sign in to use the Converters";

      main?.appendChild(notificationsContainer);
      notificationsContainer.appendChild(notifications);
      notifications.appendChild(content);
      content.appendChild(notiTitle);
      content.appendChild(offline);

      main?.appendChild(postsContainer);
      postsContainer.appendChild(posts);
      posts.appendChild(content2);
      content2.appendChild(tempTitle);
      content2.appendChild(offline2);
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
      user.setAttribute("height", "50px");
      user.setAttribute("width", "50px");

      signQuestion.textContent = "Sign-in as User1?";

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

      signIn.addEventListener("click", () => {
        state.signedIn = "true";
        state.main = "home";
        linksRender(state);
        mainRender(state);
      });
    }
  }
};

mainRender(state);
