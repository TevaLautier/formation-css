import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { debounceTime, delay } from "rxjs/operators";
import { ActusItem } from "../_classes/actus-item";

@Injectable({
  providedIn: "root",
})
export class ActusService {
  actusList = [
    {
      titre: "Un nouvel extrait pour le film Lupin III The First",
      description: "La séquence d'introduction a découvrir",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34337.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Un nouveau spin-off pour le manga Bungou Stray Dogs",
      description: "Une histoire centré sur le sombre Akutagawa",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34336.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Top MS hebdo du 18/11/2019 au 24/11/2019",
      description:
        "Voici le TOP MS des tomes les plus ajoutés dans les collections des membres MS entre le 18/11/2019 et le 24/11/2019.",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34331.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Un nouvel extrait pour le film Lupin III The First",
      description: "La séquence d'introduction a découvrir",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34337.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Un nouveau spin-off pour le manga Bungou Stray Dogs",
      description: "Une histoire centré sur le sombre Akutagawa",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34336.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Top MS hebdo du 18/11/2019 au 24/11/2019",
      description:
        "Voici le TOP MS des tomes les plus ajoutés dans les collections des membres MS entre le 18/11/2019 et le 24/11/2019.",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34331.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Un nouvel extrait pour le film Lupin III The First",
      description: "La séquence d'introduction a découvrir",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34337.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Un nouveau spin-off pour le manga Bungou Stray Dogs",
      description: "Une histoire centré sur le sombre Akutagawa",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34336.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
    {
      titre: "Top MS hebdo du 18/11/2019 au 24/11/2019",
      description:
        "Voici le TOP MS des tomes les plus ajoutés dans les collections des membres MS entre le 18/11/2019 et le 24/11/2019.",
      image: "https://img.sanctuary.fr/thumbs_news_fb/34331.jpg",
      nbComment: 0,
      nbLike: 15,
      date: new Date(),
    },
  ];

  constructor() {}

  getActus(): Observable<ActusItem[]> {
    return of(this.actusList).pipe(delay(1000));
  }
}
