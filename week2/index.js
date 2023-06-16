const articles = [
  {
    title: 'Tempat wisata Bandung yang perlu kamu datangi',
    description: 'Wisata Bandung yang wajib kamu datangi ketika kamu sedang berjalan-jalan ke Bandung. Jangan sampai terlewati kegiatan kamu saat di Bandung.',
    author: 'Jhon Doe',
    createdDate: '15 Juni 2023',
    imageUrl: 'https://blog.evermos.com/wp-content/uploads/2020/11/krstdee_122605293_348894526209830_1258374425888695369_n.jpg',
  },
  {
    title: '8 Makanan khas Bandung yang wajib kamu coba',
    description: 'Kamu lagi berlibur ke Bandung? jangan sampai lupa untuk cobain makanan khas Bandung. Berikut ini adalah makanan khas Bandung yang wajib kamu coba.',
    author: 'Rahmat',
    createdDate: '10 Juni 2023',
    imageUrl: 'https://fanatech.net/blog/wp-content/uploads/2020/02/makanan-khas-bandung.png',
  },
  {
    title: 'Ajak pasangan kamu ke tempat wisata romantis di Bandung',
    description: 'Ajak pasangan kamu yuk ke Bandung dan kunjungi tempat-tempat wisata romantis di Bandung. Jangan sampai terlewatkan ya.',
    author: 'Budiman',
    createdDate: '1 Mei 2023',
    imageUrl: 'https://haigadis.com/wp-content/uploads/2019/07/tempat-romantis-di-bandung-Dapur-Caringin-Tilu.jpg',
  },
  {
    title: 'Ada yang baru di Farm House Lembang',
    description: 'Yuk lebaran ini ajak keluarga kamu ke Farm House Lembang. Ada yang baru lho di Farm House Lembang. Mampir ke Farm House Lembang bareng keluarga.',
    author: 'Rahmat',
    createdDate: '21 Maret 2023',
    imageUrl: 'https://2.bp.blogspot.com/-iTvjCJDTW-s/XCSrOZFCHnI/AAAAAAAA5tY/yW3UAl7hKNYQvECLN0nmOs86E2k8av_8wCLcBGAs/s1600/farmhouse-lembang.jpg',
  },
  {
    title: 'Wisata cosplay di Bandung',
    description: 'Kamu suka cosplay? yuk datang ke Bandung dan kunjungi tempat-tempat wisata cosplay di Bandung. Jangan sampai terlewatkan ya.',
    author: 'Jhon Doe',
    createdDate: '9 Februari 2023',
    imageUrl: 'https://assets.kompasiana.com/items/album/2018/08/27/screenshot-2018-08-23-14-44-44-1-5b83ee7a677ffb73504e469b.png?t=o&v=760',
  },
];

const galery = [
  {
    title: 'Farm House Lembang',
    imageUrl: 'https://cdn.nativeindonesia.com/foto/farmhouse-lembang-bandung/farm-house-lembang-Bandung.jpg',
    isRecommanded: true,
  },
  {
    title: 'Observatorium Bosscha',
    imageUrl: 'https://cdn.pergidulu.com/wp-content/uploads/2016/09/Observatorium-Bosscha-Lembang.jpg',
    isRecommanded: true,
  },
  {
    title: 'Jalan Asia Afrika',
    imageUrl: 'https://i.pinimg.com/originals/7d/95/33/7d9533694993b90adc6d6d4a112cba02.jpg',
    isRecommanded: false,
  },
  {
    title: 'Stone Garden',
    imageUrl: 'https://lelungan.net/images/kab-bandung/wisata-stone-garden-kab-bandung/hunting-sunset-stone-garden-padalarang-widikeling-20150716-145223-wisata-kab.jpg',
    isRecommanded: true,
  },
  {
    title: 'Taman Film Pasopati',
    imageUrl: 'https://thecityateyelevel.com/app/uploads/2020/10/SHAU_taman_film_005-1-900x600.jpg',
    isRecommanded: false,
  },
  {
    title: 'Museum Geologi',
    imageUrl: 'https://blog.tripcetera.com/id/wp-content/uploads/2020/10/image-2-1024x535.png',
    isRecommanded: false,
  },
  {
    title: 'Floating Market',
    imageUrl: 'https://www.lembang.indonesia-tourism.com/images/floating_market.jpg',
    isRecommanded: false,
  },
  {
    title: 'Kawah Putih',
    imageUrl: 'https://1.bp.blogspot.com/-ZwCYDyxeEJY/XRAgTa7ZvFI/AAAAAAAAALA/Mk1qU8iBkbUgOqLqyl8rNZtkGvvzIqeHACLcBGAs/s1600/Kawah-Putih1.jpg',
    isRecommanded: true,
  },
  {
    title: 'Ranca Upas',
    imageUrl: 'https://c2.staticflickr.com/8/7257/7589610176_a840624256_b.jpg',
    isRecommanded: true,
  },
];

const createCardArticle = (articleData) => {
  const card = document.createElement('div');
  card.classList.add('article__card');

  const articleImage = document.createElement('img');
  articleImage.setAttribute('src', articleData.imageUrl);
  articleImage.setAttribute('alt', articleData.title);
  articleImage.classList.add('article__image');
  card.appendChild(articleImage);

  const title = document.createElement('h3');
  title.classList.add('article__title');
  title.innerText = articleData.title;
  card.appendChild(title);

  const informationContainer = document.createElement('div');
  informationContainer.classList.add('article__information');
  const dateInformation = document.createElement('p');
  dateInformation.innerText = articleData.createdDate + ',';
  informationContainer.appendChild(dateInformation);
  const authorInformation = document.createElement('p');
  authorInformation.innerText = articleData.author;
  informationContainer.appendChild(authorInformation);
  card.appendChild(informationContainer);

  const description = document.createElement('p');
  description.classList.add('article__description');
  description.innerText = articleData.description;
  card.appendChild(description);

  const readMoreButton = document.createElement('a');
  readMoreButton.classList.add('btn');
  readMoreButton.classList.add('btn--primary');
  readMoreButton.setAttribute('href', '#');
  readMoreButton.innerText = 'Selengkapnya';
  card.appendChild(readMoreButton);

  const articlesContainer = document.querySelector('.articles__container');
  articlesContainer.appendChild(card);
};

const createCardImageGalery = (imageData) => {
  const card = document.createElement('div');
  card.classList.add('galery__card');

  const picture = document.createElement('picture');
  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', imageData.imageUrl);
  cardImage.setAttribute('alt', imageData.title);
  cardImage.classList.add('galery__image');

  const captionCard = document.createElement('figcaption');
  captionCard.classList.add('galery__title');
  captionCard.innerText = imageData.title;

  picture.appendChild(cardImage);
  picture.appendChild(captionCard);

  card.appendChild(picture);

  if (imageData.isRecommanded) {
    const cardRecomendedBage = document.createElement('p');
    cardRecomendedBage.classList.add('galery__recomendation');
    cardRecomendedBage.innerText = '❤️ Rekomendasi';

    card.appendChild(cardRecomendedBage);
  }

  const galeryContainer = document.querySelector('.galery__container');
  galeryContainer.appendChild(card);
}

document.addEventListener('DOMContentLoaded', () => {
  articles.forEach((articleData) => createCardArticle(articleData));

  galery.forEach((imageGalery) => createCardImageGalery(imageGalery));
});
