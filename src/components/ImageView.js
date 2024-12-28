import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../useClickOutside";

const ImgViews = ({ close, src }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <article className="mfp-bg mfp-ready" onClick={() => close(false)}></article>
      <article
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <article
          className={` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <article className="mfp-content" ref={domNode}>
            <article className="mfp-iframe-scaler">
              <img  loading="lazy" className="mfp-img" src={src} />
            </article>
          </article>
          <article className="mfp-preloader">Loading...</article>
        </article>
      </article>
    </Fragment>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach((a) => {
        if (a.href.includes("/images")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", (e) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </Fragment>
  );
};
export default ImageView;
