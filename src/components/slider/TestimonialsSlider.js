import { testimonialSlider } from "@/src/sliderProps";
import { Component, Fragment, useEffect, useState } from "react";
import Slider from "react-slick";

export default class TestimonialsSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Fragment>
        <article className="row justify-content-between align-items-end mb-30">
          <article className="col-lg-8">
            <article className="section-title mb-25 wow fadeInRight delay-0-2s">
              <span className="sub-title mb-15">Clients Feedback</span>
              <h2>What Our Clients Say Us</h2>
            </article>
          </article>
          <article className="col-lg-4">
            <article className="slider-arrow mb-25 text-lg-end">
              <button
                className="slick-arrow testi-prev"
                onClick={this.previous}
              >
                <i className="far fa-angle-left" />
              </button>
              <button className="slick-arrow testi-next" onClick={this.next}>
                <i className="far fa-angle-right" />
              </button>
            </article>
          </article>
        </article>
        <Slider
          {...testimonialSlider}
          ref={(c) => (this.slider = c)}
          className="testimonial-slider"
        >
          <article className="testimonial-item wow fadeInUp delay-0-2s">
            <article className="image">
              <img
                src="assets/images/testimonials/testi-author1.jpg"
                alt="Author"
              />
            </article>
            <article className="content">
              <article className="testi-header">
                <h4>Excellent Works</h4>
                <article className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </article>
              </article>
              <article className="testi-text">
                Sed ut perspiciatis unde omnis iste natus voluptatem accus
                antiume dolorem queauy antium totam aperiam eaque quaey abillosa
                inventore veritatis vitaec
              </article>
              <article className="testi-footer">
                <article className="icon">
                  <i className="flaticon-quotation" />
                </article>
                <article className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </article>
              </article>
            </article>
          </article>
          <article className="testimonial-item wow fadeInUp delay-0-4s">
            <article className="content">
              <article className="testi-header">
                <h4>Excellent Works</h4>
                <article className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </article>
              </article>
              <article className="testi-text">
                On the other hand denounce righteous indignations and dislike
                men who beguiled and demoralized by the charms of pleasure
                moment blinded foresee
              </article>
              <article className="testi-footer">
                <article className="icon">
                  <i className="flaticon-quotation" />
                </article>
                <article className="title">
                  <h4>Jose T. McMichael</h4>
                  <span className="designation">Senior Manager</span>
                </article>
              </article>
            </article>
          </article>
          <article className="testimonial-item wow fadeInUp delay-0-6s">
            <article className="image">
              <img
                src="assets/images/testimonials/testi-author4.jpg"
                alt="Author"
              />
            </article>
            <article className="content">
              <article className="testi-header">
                <h4>Excellent Works</h4>
                <article className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </article>
              </article>
              <article className="testi-text">
                Unde omnis iste natus voluptatem accus antiume dolorem queauy
                antium totam aperiam eaque quaey abillosa inventore veritatis
                etuarchite beatae vitaec
              </article>
              <article className="testi-footer">
                <article className="icon">
                  <i className="flaticon-quotation" />
                </article>
                <article className="title">
                  <h4>Andrew D. Bricker</h4>
                  <span className="designation">CEO &amp; Founder</span>
                </article>
              </article>
            </article>
          </article>
        </Slider>
      </Fragment>
    );
  }
}

const TestimonialsSlider2 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const slider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 400,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
  };
  return (
    <Fragment>
      <Slider
        {...thumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
        className="testi-image-slider"
      >
        <article className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author1.jpg"
            alt="Author"
          />
        </article>
        <article className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author2.jpg"
            alt="Author"
          />
        </article>
        <article className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author3.jpg"
            alt="Author"
          />
        </article>
        <article className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author4.jpg"
            alt="Author"
          />
        </article>
        <article className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author5.jpg"
            alt="Author"
          />
        </article>
        <article className="testi-image-item">
          <img
            src="assets/images/testimonials/testi-author1.jpg"
            alt="Author"
          />
        </article>
      </Slider>
      <Slider
        {...slider}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
        className="testi-content-slider"
      >
        <article className="testi-content-item">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queauy antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaec voluptas sit aspernatur autodit
          </p>
          <article className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>CEO &amp; Founder</span>
          </article>
        </article>
        <article className="testi-content-item">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queauy antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaec voluptas sit aspernatur autodit
          </p>
          <article className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>CEO &amp; Founder</span>
          </article>
        </article>
        <article className="testi-content-item">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queauy antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaec voluptas sit aspernatur autodit
          </p>
          <article className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>CEO &amp; Founder</span>
          </article>
        </article>
        <article className="testi-content-item">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queauy antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaec voluptas sit aspernatur autodit
          </p>
          <article className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>CEO &amp; Founder</span>
          </article>
        </article>
        <article className="testi-content-item">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queauy antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaec voluptas sit aspernatur autodit
          </p>
          <article className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>CEO &amp; Founder</span>
          </article>
        </article>
        <article className="testi-content-item">
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accus antiume
            dolorem queauy antium totam aperiam eaque quae abillosa inventore
            veritatis etuarchite beatae vitaec voluptas sit aspernatur autodit
          </p>
          <article className="author">
            <span className="h4">Andrew D. Bricker</span>
            <span>CEO &amp; Founder</span>
          </article>
        </article>
      </Slider>
    </Fragment>
  );
};
export { TestimonialsSlider2 };
