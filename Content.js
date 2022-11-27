const generateHTML = (pageName) => {
  return `
  <div class='c'>
  <div class='_404'>
      <p class="let">Still not time for ${pageName}.</p>
  </div>
  <p class='_1'>wake the cat, </p>
  <div class='_2'>once you are done with your work.</div>
</div>
<div class="container">
  <div class="shadow"></div>
  <div class="cat">
      <div class="ear"></div>
      <div class="eye"></div>
      <div class="mouth"></div>
      <div class="nose"></div>
      <div class="tail"></div>
      <div class="body"></div>
      <div class="bubble"></div>
  </div>
</div>
    `;
}

const generateStyles = () => {
  return `
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Mali:wght@300;400;500&display=swap");

    body {
      background-color: #316bb8e3;
      padding: 0;
      margin: 0;
      font-family: "Mali", cursive;
    }
    .container {
      height: 200px;
      width: 350px;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 60%;
    }
    .cat {
      background-color: #f19b1a;
      height: 65px;
      width: 80px;
      border-radius: 0 80px 80px 0;
      position: absolute;
      bottom: 60px;
      right: 50px;
    }
    .ear {
      height: 15px;
      width: 15px;
      background-color: #f19b1a;
      position: absolute;
      bottom: 64px;
      left: 8px;
      border-radius: 20px 0 0 0;
      box-shadow: 25px 0 #f19b1a;
    }
    .eye,
    .eye:before {
      height: 7px;
      width: 10px;
      border: 2px solid #2c2c2c;
      position: absolute;
      border-radius: 0 0 15px 15px;
      border-top: none;
    }
    .eye {
      top: 18px;
      left: 15px;
    }
    .eye:before {
      content: "";
      left: 30px;
    }
    .nose {
      background-color: #ffffff;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      position: absolute;
      top: 32px;
      left: 25px;
      box-shadow: 12px 0 #ffffff;
    }
    .nose:before {
      content: "";
      width: 12px;
      height: 8px;
      position: absolute;
      background-color: #ffffff;
      left: 6px;
    }
    .nose:after {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      border-top: 8px solid #ef926b;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      bottom: 7px;
      left: 6px;
    }
    .mouth {
      background-color: #2c2c2c;
      height: 15px;
      width: 17px;
      position: absolute;
      border-radius: 0 0 5px 5px;
      top: 38px;
      left: 27px;
      animation: mouth-move 2s infinite;
      transform-origin: top;
    }
    @keyframes mouth-move {
      50% {
        transform: scaleY(0.7);
      }
    }
    .body {
      background-color: #f19b1a;
      height: 90px;
      width: 140px;
      position: absolute;
      right: 65px;
      bottom: 0;
      border-radius: 60px 60px 0 0;
      animation: sleep 2s infinite;
      transform-origin: bottom right;
    }
    @keyframes sleep {
      50% {
        transform: scale(0.9, 1.05);
      }
    }
    .tail {
      background-color: #d07219;
      height: 20px;
      width: 100px;
      position: absolute;
      right: 150px;
      bottom: 0;
      border-radius: 20px 0 0 20px;
    }
    .body:before {
      content: "";
      position: absolute;
      background-color: #ffffff;
      height: 12px;
      width: 30px;
      border-radius: 6px;
      bottom: 0;
      left: 22px;
      box-shadow: 45px 0 #ffffff;
    }
    .bubble {
      height: 20px;
      width: 20px;
      background-color: rgba(255, 255, 255, 0.4);
      position: absolute;
      left: 65px;
      top: 20px;
      border-radius: 50px 50px 50px 5px;
      animation: bubble-scale 2s infinite;
    }
    @keyframes bubble-scale {
      50% {
        transform: scale(1.6);
      }
    }
    .shadow {
      height: 10px;
      width: 240px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      position: absolute;
      bottom: 52px;
      left: 70px;
      animation: shadow 2s infinite;
    }
    @keyframes shadow {
      50% {
        transform: scaleX(0.7);
      }
    }
    
    .c {
      height: 200px;
      width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      align-items: center;
      right: 50%;
      left: 35%;
      top: 23%;
      color: #f2f2f2;
    }
    
    ._404 {
      display: flex;
      height: 40px;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      margin: 15px 0;
    }
    
    .let {
      font-size: 31px;
    }
    
    ._1 {
      font-size: 20px;
      margin-bottom: 2px;
    }
    
    ._2 {
      font-size: 20px;
    }
    
    </style>
    `;
}


switch (window.location.hostname) {
  case "www.netflix.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Netflix");
    break;
  case "www.primevideo.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Prime Video");
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Instagram");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Facebook");
    break;
  case "twitter.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Twitter");
    break;
  case "www.reddit.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Reddit");
    break;
  case "www.tiktok.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Tiktok");
    break;
  case "www.whatsapp.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("WhatsApp");
    break;
  case "discord.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Discord");
    break;
  case "www.linkedin.com":
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML("Linkedin");
}