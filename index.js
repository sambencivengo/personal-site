let blog = {};

async function fetchMedium(url = '') {
	const response = await fetch(url);
	return response.json();
}

fetchMedium(
	'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sambencivengo'
).then((data) => {
	blog = data;
	const container = document.getElementById('blog-list');
	for (let blogPost of blog.items.slice(0, 3)) {
		let blogElement = document.createElement('a');
		let lineBreak = document.createElement('br');
		blogElement.href = blogPost.link;
		blogElement.textContent = `{ ${blogPost.title} }`;
		container.append(blogElement);
		blogElement.className = 'blog-element';
		blogElement.append(lineBreak);
	}
});

// let modeButton = document.getElementById('dark-mode');
// modeButton.onclick = function () {
// 	const body = document.body;
// 	body.classList.toggle('dark-mode');
// };

const currentTime = new Date();

const day = new Date();
day.setHours(08, 0o0, 0);
const night = new Date();
night.setHours(18, 0o0, 0);
const body = document.body;

function setMode() {
	if (currentTime <= day || currentTime >= night) {
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
	}
}
setInterval(function () {
	setMode();
}, 1000 * 60 * 5);

setMode();
