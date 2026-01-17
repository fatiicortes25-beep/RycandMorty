const url = "https://rickandmortyapi.com/api/character";
const container = document.querySelector(".container");
const details = document.querySelector(".details");

const card = character => {
    const div = document.createElement('div')
    div.className = 'card'
    const html = `
    <img src="${character.image}" alt="${character.name}">

    <h2>${character.name}</h2>

    
    <button class="btn" data-id="${character.id}" >Ver más</button>
    `
    
    div.innerHTML = html
    return div
}

const switchDiv = () => {
    container.classList.toggle('invisible');
    details.classList.toggle('invisible');
}



const getId = (e) => {
    if (e.target.classList.contains('btn')) {
        const id = e.target.getAttribute('data-id')
        fetch(url + '/' + id)
            .then(response => response.json())
            .then(character => {
                console.log(character)
                const html = `
                <img src="${character.image}" alt="">
                <h2>ID: ${character.id}</h2>
                <h2>Nombre: ${character.name}</h2>
                <h2>Estatus: ${character.status}</h2>
                <h2>Especies: ${character.species}</h2>
                <h2>Tipo: ${character.type}</h2>
                <h2>${character.gender}</h2>
                <h2>Origen: ${character.origin}</h2>
                <h2>Locación: ${character.location}</h2>
                <h2>Episodio: ${character.episode}</h2>
                <h2>Creado: ${character.created}</h2>
                `
                details.querySelector('div')
                    .innerHTML = html
                switchDiv()
            })
    }
}


const page = Math.ceil(Math.random() * 42);
fetch(url + '?page=' + page)
    .then((response) => response.json())
    .then(data => {
        data.results.forEach(character => {
            container.appendChild(card(character));

        })
    })
container.addEventListener('click', getId);


