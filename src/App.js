import "./styles.css";
import React, { useState } from "react";

const moviesDB = {
  drama: [
    {
      title: "The Big Short",
      description:
        "In 2008’s The Big Short, Adam McKay takes a dense and dreary subject based on the 2008 financial crisis triggered by the United States housing bubble and makes it both entertaining and intriguing at the same time by his comedic flavor and unorthodox filmmaking style. The great ensemble of the cast, from Steve Carell, Christian Bale to Brad Pitt and Ryan Gosling, the masterfully written screenplay, and splendid direction make this film a must-watch despite the Wall Street-heavy storyline.",
      image:
        "https://justformoviefreaks.in/wp-content/uploads/2020/06/The-Big-Short-Best-Drama-Movies-on-Netflix-India.png",
      Rating: `8/10`
    },
    {
      title: "The Aviator",
      description:
        "Martin Scorsese’s directorial, The Aviator explores the story of Howard Hughes, an idiosyncratic tycoon with a genius mind, who has a mental illness that threatens to ruin his career. When his struggles exceed the limit of his determination, he reminisces about the past.",
      image:
        "https://justformoviefreaks.in/wp-content/uploads/2021/04/The-Aviator-Best-English-Movies-on-Amazon-Prime-India.jpg",
      Rating: `8.5/10`
    },
    {
      title: "Predestination",
      description:
        "The Spierig Brothers’ Predestination stars Ethan Hawke, Sarah Snook, and Noah Taylor. The story explores the story of a man who goes back in time to prevent mass murder. Complicated in its strategy, Predestination is one of those movies that will mess with your mind. ",
      image:
        "https://justformoviefreaks.in/wp-content/uploads/2019/07/predestination-movie.png",
      Rating: `8/10`
    }
  ],
  Action: [
    {
      title: "No Game No Life: Zero (2017)",
      description:
        "This isn’t your typical war movie. Based on the novel series of the same name, No Game, No Life: Zero tells the story of humanity’s struggle through the great war. Despite being the only race without magic, humans must use the true power of intellect to survive.",
      image:
        "https://img.themanual.com/image/themanual/nogamenolife-768x768.jpg",
      Rating: `8.5/10`
    },
    {
      title: "Underground (2019)",
      description:
        "No need to add this to your list of best Ryan Reynolds movies — or any “best of” list for that matter — but it’s a great visual spectacle if you’re familiar with Michael Bay’s line of work. Six individuals with exceptional skills are handpicked to delete their past and devote their lives to foiling the intent of supervillains, free from the restrictions of typical well-doers that could well start a world war with this behavior.",
      image:
        "https://img.themanual.com/image/themanual/6underground-768x768.jpg",
      Rating: `8/10`
    },
    {
      title: "Kung Fu Panda (2008)",
      description:
        "Though it is an animated movie, it’s arguably one of the best to come out of this era of animation. Starring Jack Black as basically a cartoon panda version of himself, the voiceovers and animation are just two of the reasons why this movie rocks, with the sincerely kickass fighting scenes being an added bonus and a necessity for our list today.",
      image:
        "https://img.themanual.com/image/themanual/kungfupanda-768x768.jpg",
      Rating: `8.8/10`
    }
  ],
  Horror: [
    {
      title: "The Ritual",
      description:
        "Four friends with a long-standing — but strained — connection take a hiking trip into the Swedish wilderness, from which they may never return.",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2021-02/24/23/asset/8a98f7f0d02c/sub-buzz-4811-1614210200-5.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
      Rating: `8.5/10`
    },
    {
      title: "Mercy Black",
      description:
        "Fifteen years after a traumatic crime, a woman is released from psychiatric care and tries to drive out an evil spirit that continues to haunt her.",
      image:
        "https://img.buzzfeed.com/buzzfeed-static/static/2021-02/25/0/asset/4314bd84ac6c/sub-buzz-4834-1614211305-17.jpg?downsize=600:*&output-format=auto&output-quality=auto",
      Rating: `8/10`
    }
  ],
  comedy: [
    {
      title: "“I Care a Lot” (2020)",
      description:
        "J Blakeson’s darkly funny thriller “I Care a Lot” makes a meal out of leaning into the icy, often hilarious villainy of such indelible characters as a ponytailed crime boss played by Peter Dinklage, a smarmy lawyer (Chris Messina) who dresses as if Colonel Sanders was a stand-up comedian, and star Rosamund Pike, returning to her frosty “Gone Girl” best. The film, a pulpy social thriller about the decidedly unfunny world of “professional guardians,” is well-suited for midnight movie positioning and is at its most enjoyable when it’s giddily tracking just how very, very bad people can be.",
      image:
        "https://www.indiewire.com/wp-content/uploads/2020/09/I_care_a_lot-1.jpg?resize=1024,512",
      Rating: `8/10`
    },
    {
      title: "“Once Upon a Time in Hollywood” (2019)",
      description:
        "The shifting 1969 narrative centers on declining western TV star Rick Dalton (Leonardo DiCaprio) and his loyal stunt double and driver Cliff Booth (Brad Pitt). Dalton lives on Cielo Drive, next door to angelic rising star Sharon Tate (Margot Robbie) and her A-list director Roman Polanski (Rafal Zawierucha), hot off “Rosemary’s Baby.” They’re riding the counterculture surge in Hollywood, while Dalton swigs booze in his trailer and loses his shit when he forgets his lines.",
      image:
        "https://www.indiewire.com/wp-content/uploads/2020/02/boots_hero.jpg?w=780",
      Rating: `8.5/10`
    }
  ]
};
const moviesName = Object.keys(moviesDB);

export default function App() {
  const [seriesList, setSeriesList] = useState(moviesDB.drama);

  function movieClickHandler(genre) {
    const series = moviesDB[genre];
    setSeriesList(series);
  }

  function getSeriesList(series) {
    const title = series.title;
    const desc = series.description;
    const img = series.image;
    const rating = series.Rating;
    const lists = (
      <li className="list-items">
        <img className="movie-img" src={img} alt="" />
        <h1 className="movie-title">{title}</h1>
        <div className="movie-desc">{desc}</div>
        <p className="movie-rating" style={{ fontWeight: "bold" }}>
          {rating}
        </p>
      </li>
    );
    return lists;
  }
  return (
    <div className="App">
      <h1 className="title">MOVIE RECOMMENDER</h1>
      <div>
        {moviesName.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => movieClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul className="list">
        {seriesList.map((series) => {
          return getSeriesList(series);
        })}
      </ul>
      <h2 class="footer-title">Connect with me!</h2>
      <footer className="footer">
        <a className="footer-link" href="https://github.com/Manpreet-hub">
          <img
            className="foter-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIw4hzzkoSEKr7fZHSYKjJsQ1hnbECjeWatg&usqp=CAU"
          />
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/manpreet-singh-912ba3171/"
        >
          <img
            className="foter-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhH6k6UumO-8wiFrOHA6ec5LIy3g7-bgiAKQ&usqp=CAU"
          />
        </a>
      </footer>
    </div>
  );
}
