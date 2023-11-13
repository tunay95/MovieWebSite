let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click',()=>{
    cards.scrollLeft -=140;
})
right_btn.addEventListener('click',()=>{
    cards.scrollLeft +=140
})

let json_url= "movie.json";

fetch(json_url).then(Response => Response.json())
.then((data)=>{
    data.forEach((element,i) => {
        let{name,imdb,date,sposter,bposter,genre,type,url} = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href= url;
        card.innerHTML = `
        <img src="${smlposter} https://m.media-amazon.com/images/I/A10bNTO0CnL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bgposter}}" alt="">
            <div class="cont">
                <h4>${name}Inception</h4>
                <div class="sub">
                    <p>${genre}, ${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
            </div>
        </div>
        `
        cards.appendChild(card)
    });
});

