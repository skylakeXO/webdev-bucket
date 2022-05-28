const form = document.querySelector('#search') 
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log(form.elements.query.value);
    const searched = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searched}`);
    console.log(res.data);
    postImg(res.data); 
    form.elements.query.value = '';
})

const postImg = (shows) => {
    for(let showResult of shows) { 
        if(showResult.show.image) {
            const img = document.createElement('IMG');
            img.src = showResult.show.image.medium;
            document.body.append(img);
        }
        
    }
}