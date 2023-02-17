/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

function App() {
  const [films, setFilms] = useState([]);

  const fetchFilms = async () => {
    const result = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=19cc2d55ec287216302aaf07144d9835');

    setFilms(result.data.results)
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div className="main">
      <header className="header">
        <div className="header__top">
          <div className="header__top-container">
            <a href="#" className="logo">

            </a>
            <a href="#menu" className="header__menu-opener" />
          </div>
          <nav className="header__menu menu" id="menu">
            <div className="menu__container">

              <div className="menu__top">
                <a href="#" className="logo">
                  
                </a>
                <a href="#" className="menu__cross"></a>
              </div>
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#about-us" className="menu__link">About us</a>
                </li>

                <li className="menu__item">
                  <a href="#new-films" className="menu__link">New films</a>
                </li>

                <li className="menu__item">
                  <a href="#news" className="menu__link">News</a>
                </li>

                <li className="menu__item">
                  <a href="#reviews" className="menu__link">Reviwes</a>
                </li>
              </ul>
            </div>
          </nav>
          <a href="#footer" className="header__hire-us-link">Hire us</a>
        </div>

        <div className="header__container">
          <div className="header__content">
            <h1 className="header__title">
              Title Template
            </h1>

            <p className="header__text">Description template</p>

            <a
              href="#our-expertise"
              className="button button--header">Try now</a>
          </div>

          <div className="header__image"></div>
        </div>

      </header>

      <main className="main">
        <section className="about-us" id="about-us">
          <h2 className="about-us__title">About us</h2>
          <p className="about-us__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque alias expedita dignissimos nostrum, officia consectetur illo deleniti quos doloribus omnis animi hic ipsam dolore vero saepe unde enim maxime possimus ad, corrupti assumenda aliquam ex quasi! Vel, quae soluta?</p>
        </section>

        <section className="new-films" id="new-films">
          <h2 className="new-films__title">New films</h2>
          <div className="slider">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
            >
              {films.map(film => (
                <SwiperSlide>
                  <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title} />
                  <h3 className="slider__title">{film.title}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="news" id="news">
          <div className="news__container">
          <h2 className="news__title">Lastest news</h2>
            <ul className="news__list">
              <li className="news__item">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio illo harum quia doloremque, eligendi possimus dignissimos adipisci culpa voluptate provident accusamus! Eos sequi ipsam possimus, et debitis esse. Tenetur!
              </li>
              <li className="news__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsa illo deserunt unde sapiente reiciendis voluptas praesentium, sint, culpa officia eius eum? Veniam laudantium vero corporis alias recusandae fugit labore.
              </li>
              <li className="news__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore nostrum debitis repellat possimus voluptate velit, doloribus consectetur illo minima impedit sed assumenda ullam, aspernatur voluptatibus aliquid tenetur est voluptatem.
              </li>
            </ul>
          </div>
        </section>

        <section className="reviews" id="reviews">
        <h2 className="reviews__title">Clients reviews</h2>
          <div className="slider">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt="avatar"
              />
                <h3 className="slider__title">Name Surname</h3>
                <p className="slider__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem soluta cupiditate ducimus fuga dolorem nobis distinctio, tenetur enim accusantium dolorum vitae aliquid eos, vero mollitia inventore exercitationem quod incidunt nostrum sint velit libero. Culpa, dolorum, neque sit molestias consequatur reiciendis cupiditate quam, necessitatibus ducimus maxime reprehenderit natus laboriosam. Odio, autem?</p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt="avatar"
              />
              <h3 className="slider__title">Name Surname</h3>
              <p className="slider__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem soluta cupiditate ducimus fuga dolorem nobis distinctio, tenetur enim accusantium dolorum vitae aliquid eos, vero mollitia inventore exercitationem quod incidunt nostrum sint velit libero. Culpa, dolorum, neque sit molestias consequatur reiciendis cupiditate quam, necessitatibus ducimus maxime reprehenderit natus laboriosam. Odio, autem?</p>
              </SwiperSlide>
              <SwiperSlide>
                <img
                src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                alt="avatar"
              />
              <h3 className="slider__title">Name Surname</h3>
              <p className="slider__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem soluta cupiditate ducimus fuga dolorem nobis distinctio, tenetur enim accusantium dolorum vitae aliquid eos, vero mollitia inventore exercitationem quod incidunt nostrum sint velit libero. Culpa, dolorum, neque sit molestias consequatur reiciendis cupiditate quam, necessitatibus ducimus maxime reprehenderit natus laboriosam. Odio, autem?</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

      </main>

      <footer className="footer" id="footer">
      </footer>
    </div>
  );
}

export default App;
