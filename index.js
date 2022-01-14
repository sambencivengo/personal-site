let blog = {};

async function fetchMedium(url = '') {
	const response = await fetch(url);
	return response.json();
}

fetchMedium(
	'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sambencivengo'
).then((data) => {
	console.log(data);
	blog = data;
	const container = document.getElementById('blog-list');
	for (let blogPost of blog.items.slice(0, 3)) {
		console.log(blogPost);
		let blogElement = document.createElement('a');
		let lineBreak = document.createElement('br');
		blogElement.href = blogPost.link;
		blogElement.textContent = `{ ${blogPost.title} }`;
		container.append(blogElement);
		blogElement.className = 'blog-element';
		blogElement.append(lineBreak);
	}
});

console.log(blog);
