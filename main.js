async function findShow(query){
    let response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
    let data = await response.json()
    // console.log(data)
    return data
}



findShow("office").then(show =>{
    console.log(show)
    document.body.innerHTML = `
    <div class="my-show">
        <div class="my-show-title">${show.name}</div>
        <div class="my-show-summary">${show.summary}</div>
        ${show._embedded.seasons.map(season =>{
            return `<div class="my-show-season">Season ${season.number}</div>`
        }).join('')}
    </div>
    `
})
