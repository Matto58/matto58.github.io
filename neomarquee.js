let elems = document.getElementsByTagName("neomarquee");
for (let elem of elems) {
	let w;
	if (!elem.firstElementChild
		|| !elem.firstElementChild.getAttribute("width")
		|| !(w = parseInt(elem.firstElementChild.getAttribute("width")))) continue;
}