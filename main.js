const img = document.querySelector("img");

document.querySelector("input").oninput = (event) => {
  const page = event.target.value;
  img.src = `https://gdzbot.com/content/klass-11/deutch/Radchenko-Wunderkinder-Plus/exercise/Stranicy-uchebnika/${page}.jpg`;
};
