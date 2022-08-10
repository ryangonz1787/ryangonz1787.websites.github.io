
async function populate() {

  const requestURL = 'https://github.com/ryangonz1787/ryangonz1787.websites.github.io/blob/main/JS/Training.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const TrainingText = await response.json();
  
  

  populateTitle(Training);
  populateDescription(Training);

}

function populateTitle(obj) {
  const title = document.querySelector('title');
  const myH3 = document.createElement('h3');
  myH3.textContent = obj.title;
  title.appendChild(myH3);

}

function populateDescription(obj) {
  const section = document.querySelector('section');
  const description = obj.description;

  for (const description of description) {
    const myArticle = document.createElement('article');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');

    myPara1.textContent = description[0];
    myPara2.textContent = description[1];
	

    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);

    section.appendChild(myArticle);
  }
}

 populate();
