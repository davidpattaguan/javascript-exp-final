// index

let projects = [
    {
        title:"Color Randomizer",
        projectNumber: 1,
        link:"colorpallete/index.html"
    },
    {
        title:"Number to Roman Numeral Converter",
        projectNumber: 2,
        link:"numtoRomNumConverter/index.html"
    },
    {
        title:"Score keeper",
        projectNumber: 3,
        link:"scoreKeeper/index.html"
    },
    {
        title:"Joke generator using API",
        projectNumber: 4,
        link:"jokeGenerator/index.html"
    },
    {
        title:"Movies Search",
        projectNumber: 4,
        link:"moviesApi/index.html"
    }
]




const projectContainer = document.querySelector('#projects');

projects.forEach(project => {
   
    const colContainer = document.createElement('div');
    colContainer.classList.add('col-lg-4');
    

    const card = document.createElement('div');
    card.classList.add('card');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        const titleNode = document.createTextNode(project.projectNumber);
        cardTitle.appendChild(titleNode)
       
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
          const cardBodyPara = document.createElement('p');
          const node = document.createTextNode(project.title);
          cardBodyPara.appendChild(node)

          const cardBodyButton = document.createElement('a');
          cardBodyButton.setAttribute("href",project.link)
          const buttonNode = document.createTextNode("View");

          cardBodyButton.appendChild(buttonNode)
          cardBody.appendChild(cardBodyPara);
          cardBody.appendChild(cardBodyButton);
          card.appendChild(cardTitle);
          card.appendChild(cardBody);
          colContainer.appendChild(card);
          projectContainer.append(colContainer)

});

    

  