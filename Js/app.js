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
		let currentMonth = date.getMonth();
		let currentYear = date.getFullYear();

		let currentYears = 0;
		if (currentMonth >= 8 && currentDate >= 16) {
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

	const arrObjectProject = [
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
                <img class="gif" src="${project.urlGif}" alt="">
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
                            <a class="siteBtn" target="_blank" href="${project.urlSite}">Site</a>
                            <a class="codBtn" target="_blank" href="${project.urlCod}">Código</a>
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
