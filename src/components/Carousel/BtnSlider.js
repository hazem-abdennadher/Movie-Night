import "./Slider.css";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>{direction}</button>
  );
};

export default BtnSlider;
