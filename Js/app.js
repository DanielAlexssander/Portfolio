(function () {
	"use strict";

	// HOME
	navigator.geolocation.getCurrentPosition((position) => {
		const { latitude, longitude } = position.coords;

		const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`; // https://nominatim.openstreetmap.org/reverse?format=json&lat=38.389033&lon=-101.427542

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.address.country !== "Brazil") {
					const text = document.querySelector(".text-presentation");
					const contats = document.querySelector(".contats-link");
					const viewProjects = document.querySelector(".projects-link");
					text.innerHTML = `<p>Hello! My name is Daniel, and I am <span id="age"></span> years old. I am a person focused on my goal, and currently, my goal is to become a successful Front-End developer. I dedicate a significant amount of my time to studying and improving my skills in this field, always seeking to stay updated on the latest trends and technologies. My objective is to become a competent professional capable of providing creative and efficient solutions to the challenges that arise in the field.</p>`;
					ageUpdate();
					contats.textContent = `Contats`;
					viewProjects.textContent = `Projects`;
				}
			})
			.catch((error) => {
				console.log(error);
			});
	});

	// My age
	const ageUpdate = () => {
		let date = new Date();
		const ageHTML = document.querySelector("#age");
		let currentDate = date.getDate();
		let currentMonth = date.getMonth() + 1;
		console.log(currentMonth >= 8);
		let currentYear = date.getFullYear();

		let currentYears = 0;
		if (currentMonth > 8 || (currentMonth === 8 && currentDate >= 16)) {
			currentYear = date.getFullYear() + 1;
			currentYears = 2005;
		} else {
			currentYear = date.getFullYear();
			currentYears = 2006;
		}
		let currentYearOld = date.getFullYear();
		let myAge = currentYearOld - currentYears;

		ageHTML.textContent = myAge;
	};

	ageUpdate();

	// Greeting
	const greeting = () => {
		const greetingHTML = document.querySelector("#greeting");
		let date = new Date();
		let currentHour = date.getHours();

		if (currentHour >= 5 && currentHour < 12) {
			greetingHTML.textContent = "Bom dia";
		} else if (currentHour >= 12 && currentHour < 18) {
			greetingHTML.textContent = "Boa tarde";
		} else if (currentHour >= 18 || currentHour < 5) {
			greetingHTML.textContent = "Boa noite";
		}
	};

	greeting();

	if (document.querySelector(".scroll-left")) {
		const allBar = [...document.getElementsByClassName("bar-slide")];
		allBar.forEach((e) => {
			let copy = document.querySelector(".scroll-left").cloneNode(true);
			e.appendChild(copy);
		});
	}

	const sectionProjects = document.querySelector(".sectionProjects");
	const divs = document.getElementsByClassName("project");

	const HTML = `<li class="liTec"><i class="fa-brands fa-html5 orange"></i></li>`;
	const CSS = `<li class="liTec"><i class="fa-brands fa-css3-alt blue"></i></li>`;
	const JavaScript = `<li class="liTec"><i class="fa-brands fa-square-js yellow"></i></li>`;
	const TypeScript = `<li class="liTec"><svg width="35px" height="35px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>file_type_typescript_official</title><rect x="2" y="2" width="28" height="28" rx="1.312" style="fill:#3178c6"/><path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" style="fill:#ffffff;fill-rule:evenodd"/></svg></li>`;
	const Firebase = `<li class="liTec"><svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35" viewBox="0 0 32 32"><path d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z" fill="#ffa000"/><path d="M13.445 8.543l2.972 5.995-11.97 11.135z" fill="#f57f17"/><path d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z" fill="#ffca28"/><path d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z" fill="#ffa000"/></svg></li>`;
	const Sass = `<li class="liTec"><i class="fa-brands fa-sass pink"></i></li>`;
	const Node = `<li class="liTec"><i class="fa-brands fa-node green"></i></li>`;
	const React = `<li class="liTec"><i class="fa-brands fa-react"></i></li>`;
	const Flutter = `<li class="liTec"><svg fill="#5BC2F0" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z"></path></svg></li>`;
	const Redux = `<li class="liTec"><svg width="35px" height="35" viewBox="0 -6 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z" fill="#764ABC"/></svg></li>`;
	const Express = `<li class="liTec"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="35px" height="35px"><path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"/></svg></li>`;
	const Next = `<li class="liTec"><svg width="40px" height="40px" viewBox="0 -101.5 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z" fill="#ffff" fill-rule="nonzero"></path></g></svg></li>`;
	const Tailwind = `<li class="liTec"><svg width="35px" height="35px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style="fill:#ffff"/></svg></li>`;

	const arrObjectProject = [
		{
			app: true,
			urlGif: "Images/exchange-rate.gif",
			nameProject: "Exchange Rate",
			liTec: Flutter,
			informations: `Desenvolvido em Flutter, é um projeto que fiz para uso pessoal. O propósito do projeto é acompanhar os valores atuais das conversões das criptomoedas.`,
			urlSite:
				"https://drive.google.com/file/d/1RfNycs4Cmy2fYdgTsPIa2Yj6ae5bXJXi/view?usp=sharing",
			urlCod: "https://github.com/DanielAlexssander/Exchange-Rate",
		},
		{
			urlGif: "Images/hubgram.gif",
			nameProject: "HubGram",
			liTec: React + Redux + Express + Node,
			informations: `Desenvolvido em React, inspirado no Instagram, e com uma série de funcionalidades semelhantes.`,
			urlSite: "https://hubgram.netlify.app",
			urlCod: "https://github.com/DanielAlexssander/HubGram-FronEnd",
		},
		{
			urlGif: "Images/vet-pata-amiga.gif",
			nameProject: "Veterinária Pata Amiga",
			liTec: Next + Tailwind + TypeScript + Node,
			informations: `Desenvolvido em Next.js, 'Veterinária Pata Amiga' é uma empresa fictícia. É um projeto de landing page para uma empresa de Veterinário.`,
			urlSite: "https://veterinaria-pata-amiga.netlify.app",
			urlCod: "https://github.com/DanielAlexssander/Vet-Pata-Amiga",
		},
		{
			urlGif: "Images/mini-blog.gif",
			nameProject: "Mini Blog",
			liTec: React + Firebase + Node + JavaScript + CSS,
			informations: `Projeto feito em React, consiste em um Blog com todas as funcionalidades em react usando o banco de dados do Firebase.`,
			urlSite: "https://miniblog-by-danielalexssander.netlify.app",
			urlCod: "https://github.com/DanielAlexssander/miniblog",
		},
		{
			urlGif: "Images/memorycard.gif",
			nameProject: "Memory Game",
			liTec: HTML + TypeScript + Sass + Node,
			informations: `Este projeto é um jogo da memoria em TypeScript.`,
			urlSite: "https://danielalexssander.github.io/Memory-Game/",
			urlCod: "https://github.com/DanielAlexssander/Memory-Game",
		},
		{
			urlGif: "Images/checklist.gif",
			nameProject: "CheckList",
			liTec: HTML + CSS + JavaScript,
			informations: `Este projeto tem funcionalidades como: Adicionar/Remover tarefa e editar o nome da tarefa já criada. Para que isso funcione corretamente, a CheckList está sendo armazenada no seu navegador (LocalStorage) fazendo assim para que não perca os dados salvos.`,
			urlSite: "https://danielalexssander.github.io/CheckList/",
			urlCod: "https://github.com/DanielAlexssander/CheckList/",
		},
		{
			urlGif: "Images/strata.gif",
			nameProject: "Strata",
			liTec: HTML + CSS,
			informations: `O projeto Strata foi desenvolvido com base no design da "HTML5 UP".`,
			urlSite: "https://danielalexssander.github.io/Strata/",
			urlCod: "https://github.com/DanielAlexssander/Strata/",
		},
		{
			urlGif: "Images/rangehotels.gif",
			nameProject: "Range Hotels (Responsivo)",
			liTec: HTML + CSS,
			informations: `A Range Hotels é um projeto responsivo. Compatível com computador, tablet e celular.`,
			urlSite: "https://danielalexssander.github.io/RangeHotels-Responsivo/",
			urlCod: "https://github.com/DanielAlexssander/RangeHotels-Responsivo/",
		},
	];

	const html = arrObjectProject
		.map(
			(project) => `
            <div class="project">
                <img class="${project.app === true ? "gif-app" : "gif"}" src="${
				project.urlGif
			}" alt="">
                <div class="contentProject">
                    <div class="informations-content">
                        <h1 class="nameProject">${project.nameProject}</h1>
                        <div class="tecDiv flex blue">
                            <h2 class="technologyUsed">Tecnologias Utilizadas:</h2>
                            <ul class="ulTec flex">
                                ${project.liTec}
                            </ul>
                        </div>    
                        <p class="informations">${project.informations}</p>
                        <div class="btn">
                            <a class="siteBtn" target="_blank" href="${
															project.urlSite
														}">${project.app === true ? "Apk" : "Site"}</a>
                            <a class="codBtn" target="_blank" href="${
															project.urlCod
														}">Código</a>
                        </div>
                    </div>
                </div>
            </div>
        `
		)
		.join("");

	sectionProjects.innerHTML = html;

	// Contacts
	const copyBtn = document.querySelector(".copyBtn");
	const email = "danielrossinatti15@gmail.com";
	copyBtn.addEventListener("click", function (e) {
		navigator.clipboard.writeText(email);
		copyBtn.classList.add("active");
		window.getSelection().removeAllRanges();
		setTimeout(function () {
			copyBtn.classList.remove("active");
		}, 3000);
	});
})();

const navBtn = document.querySelector(".navBtn");
const ulNav = document.getElementById("ulNav");
function ClickButtonNav() {
	if (ulNav.classList.contains("open")) {
		ulNav.classList.remove("open");
		setTimeout(
			() => (navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`),
			200
		);
	} else {
		ulNav.classList.add("open");
		navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
	}
}

const logo = document.querySelectorAll(".logo");
const contentProject = document.querySelectorAll(".contentProject");
const headerContentName = document.querySelectorAll(".headerContentName");
const headerContentP = document.querySelectorAll(".headerContent p");
const navHeader = document.querySelectorAll(".ulNav");
const projectsBtn = document.getElementsByClassName("projectsBtn");
window.sr = ScrollReveal({ reset: false, mobile: true, desktop: true });

sr.reveal(navHeader, {
	mobile: false,
	delay: 100,
	duration: 1500,
	origin: "bottom",
	distance: "30px",
});

sr.reveal(headerContentName, {
	viewFactor: 0.2,
	delay: 100,
	duration: 1500,
	origin: "left",
	distance: "100px",
});

sr.reveal(headerContentP, {
	mobile: false,
	viewFactor: 0.2,
	delay: 1000,
	duration: 1500,
	origin: "right",
	distance: "100px",
});
sr.reveal(headerContentP, {
	desktop: false,
	mobile: true,
	viewFactor: 0.2,
	delay: 1000,
	duration: 1500,
	origin: "right",
	distance: "20px",
});

sr.reveal(projectsBtn, {
	delay: 1500,
	duration: 2500,
});

sr.reveal(logo, {
	viewFactor: 0,
	delay: 200,
	duration: 1500,
	rotate: { x: 0, y: 180, z: 1 },
});

sr.reveal(contentProject, {
	viewFactor: 0,
	delay: 200,
	duration: 1500,
	origin: "bottom",
	distance: "100px",
});
