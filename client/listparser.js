window.addEventListener('load', showMediaList());

function showMediaList() {
    document.getElementById('inProgress').innerHTML = '';
    const mediaList = document.getElementById('inProgress');
    for (let i = 0; i < 5; ++i) {
        const row = document.createElement('div');
        row.classList.add('row');
        const image = document.createElement('div');
        image.classList.add('col');

        const figure = document.createElement('figure');
        figure.classList.add('figure');

        const img = document.createElement('img');
        img.height = 500;
        img.width = 250;
        // img.src = top100Movies[i].image;
        img.classList.add('figure-img', 'img-fluid', 'rounded');
        img.alt = 'Image Placeholder';

        figure.appendChild(img);
        image.appendChild(figure);
        row.appendChild(image);

        const title = document.createElement('div');
        title.classList.add('col');
        title.innerHTML = 'hello';
        row.appendChild(title);

        const rating = document.createElement('div');
        rating.classList.add('col');
        rating.innerHTML = 'good evening';
        row.appendChild(rating);
        mediaList.appendChild(row);
    }
}
