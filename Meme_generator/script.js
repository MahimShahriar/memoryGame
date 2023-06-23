const imgInput = document.querySelector("#imgUrl");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const submitBtn = document.querySelector("#submitBtnt");
const form = document.querySelector(".form");
const imgSection = document.querySelector(".imgSection");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const url = imgInput.value;
	const div = document.createElement("div");
	const img = document.createElement("img");
	const htop = document.createElement("h2");
	const hbot = document.createElement("h2");
	const a = (htop.innerText = topText.value);
	const b = (hbot.innerText = bottomText.value);
	form.reset();
	if ((url !== "" && a !== "") || b !== "") {
		img.setAttribute("src", url);
		div.classList.add("div");
		img.classList.add("img");
		htop.classList.add("h2top");
		hbot.classList.add("h2bottom");
		imgSection.append(div);
		div.append(img);
		div.append(htop);
		div.append(hbot);
	} else {
		alert("Please Enter all the inputs");
	}
});

imgSection.addEventListener("click", (e) => {
	const target = e.target.parentElement.tagName;
	console.log(target);
	if (target === "DIV") {
		const div = e.target.parentElement;
		div.remove();
	}
});
