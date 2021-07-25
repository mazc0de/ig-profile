const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://instagramdimashirokovv1.p.rapidapi.com/followers/1412573833/optional?userid=1412573833&cursor=optional");
xhr.setRequestHeader("userid", "1412573833");
xhr.setRequestHeader("cursor", "optional");
xhr.setRequestHeader("x-rapidapi-key", "4a9d0978demshdff8b062dfe84a1p14ded8jsna4a7f6eb6680");
xhr.setRequestHeader("x-rapidapi-host", "InstagramdimashirokovV1.p.rapidapi.com");

xhr.send(data);