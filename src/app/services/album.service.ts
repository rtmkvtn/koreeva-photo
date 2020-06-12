import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  portfolio = [
    {
      descr: 'Анастасия',
      pics: [
        'assets/images/portfolio/1-anastasia/1.jpg',
        'assets/images/portfolio/1-anastasia/2.jpg',
        'assets/images/portfolio/1-anastasia/3.jpg',
        'assets/images/portfolio/1-anastasia/4.jpg',
        'assets/images/portfolio/1-anastasia/5.jpg',
        'assets/images/portfolio/1-anastasia/6.jpg',
        'assets/images/portfolio/1-anastasia/7.jpg',
        'assets/images/portfolio/1-anastasia/8.jpg',
        'assets/images/portfolio/1-anastasia/9.jpg',
        'assets/images/portfolio/1-anastasia/10.jpg',
        'assets/images/portfolio/1-anastasia/11.jpg',
      ],
    },
    {
      descr: 'Дарья',
      pics: [
        'assets/images/portfolio/2-daria/1.jpg',
        'assets/images/portfolio/2-daria/2.jpg',
        'assets/images/portfolio/2-daria/3.jpg',
        'assets/images/portfolio/2-daria/4.jpg',
        'assets/images/portfolio/2-daria/5.jpg',
        'assets/images/portfolio/2-daria/6.jpg',
        'assets/images/portfolio/2-daria/7.jpg',
        'assets/images/portfolio/2-daria/8.jpg',
        'assets/images/portfolio/2-daria/9.jpg',
        'assets/images/portfolio/2-daria/10.jpg',
        'assets/images/portfolio/2-daria/11.jpg',
        'assets/images/portfolio/2-daria/12.jpg',
        'assets/images/portfolio/2-daria/13.jpg',
        'assets/images/portfolio/2-daria/14.jpg',
        'assets/images/portfolio/2-daria/15.jpg',
      ],
    },
    {
      descr: 'Марина',
      pics: [
        'assets/images/portfolio/3-marina/1.jpg',
        'assets/images/portfolio/3-marina/2.jpg',
        'assets/images/portfolio/3-marina/3.jpg',
        'assets/images/portfolio/3-marina/4.jpg',
        'assets/images/portfolio/3-marina/5.jpg',
        'assets/images/portfolio/3-marina/6.jpg',
        'assets/images/portfolio/3-marina/7.jpg',
        'assets/images/portfolio/3-marina/8.jpg',
        'assets/images/portfolio/3-marina/9.jpg',
        'assets/images/portfolio/3-marina/10.jpg',
        'assets/images/portfolio/3-marina/11.jpg',
        'assets/images/portfolio/3-marina/12.jpg',
        'assets/images/portfolio/3-marina/13.jpg',
        'assets/images/portfolio/3-marina/14.jpg',
        'assets/images/portfolio/3-marina/15.jpg',
        'assets/images/portfolio/3-marina/16.jpg',
      ],
    },
    {
      descr: 'Олеся',
      pics: [
        'assets/images/portfolio/4-olesya/1.jpg',
        'assets/images/portfolio/4-olesya/2.jpg',
        'assets/images/portfolio/4-olesya/3.jpg',
        'assets/images/portfolio/4-olesya/4.jpg',
        'assets/images/portfolio/4-olesya/5.jpg',
        'assets/images/portfolio/4-olesya/6.jpg',
        'assets/images/portfolio/4-olesya/7.jpg',
        'assets/images/portfolio/4-olesya/8.jpg',
        'assets/images/portfolio/4-olesya/9.jpg',
        'assets/images/portfolio/4-olesya/10.jpg',
      ],
    },
    {
      descr: 'Татьяна',
      pics: [
        'assets/images/portfolio/5-tatiana/1.jpg',
        'assets/images/portfolio/5-tatiana/2.jpg',
        'assets/images/portfolio/5-tatiana/3.jpg',
        'assets/images/portfolio/5-tatiana/4.jpg',
        'assets/images/portfolio/5-tatiana/5.jpg',
        'assets/images/portfolio/5-tatiana/6.jpg',
        'assets/images/portfolio/5-tatiana/7.jpg',
        'assets/images/portfolio/5-tatiana/8.jpg',
        'assets/images/portfolio/5-tatiana/9.jpg',
        'assets/images/portfolio/5-tatiana/10.jpg',
        'assets/images/portfolio/5-tatiana/11.jpg',
      ],
    },
    {
      descr: 'Анита',
      pics: [
        'assets/images/portfolio/6-anita/1.jpg',
        'assets/images/portfolio/6-anita/2.jpg',
        'assets/images/portfolio/6-anita/3.jpg',
        'assets/images/portfolio/6-anita/4.jpg',
        'assets/images/portfolio/6-anita/5.jpg',
        'assets/images/portfolio/6-anita/6.jpg',
        'assets/images/portfolio/6-anita/7.jpg',
        'assets/images/portfolio/6-anita/8.jpg',
        'assets/images/portfolio/6-anita/9.jpg',
        'assets/images/portfolio/6-anita/10.jpg',
      ],
    },
  ];

  constructor() {}

  // getter для альбома на просмотр подробный его
  getAlbumForView(descr) {
    return this.portfolio.filter((album) => album.descr === descr);
  }

  // getter для массива всех альбомов
  getAlbums() {
    return this.portfolio;
  }
}
