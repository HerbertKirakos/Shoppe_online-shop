import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item inline-flex items-center justify-center" style={{ width: width }}>
      {children}
    </div>
  );
};

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div {...handlers} className="carousel overflow-hidden relative rounded-2xl max-h-[700px]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="inner whitespace-nowrap transition-transform duration-1000" style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
        {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators flex justify-center">
        <button className="hidden md:flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={() => { updateIndex(activeIndex - 1); }} >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full md:w-10 md:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-5 h-5 text-white md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
          </span>
        </button>

        <div className="flex items-center absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {React.Children.map(children, (child, index) => {
            return (
              <button className={`${index === activeIndex ? "active outline outline-2 outline-dark-gray" : ""} md:w-3 w-2 md:h-3 h-2 bg-white rounded-full`} onClick={() => { updateIndex(index); }} />
            );
          })}
        </div>
          
        <button className=" hidden md:flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={() => { updateIndex(activeIndex + 1); }} >  
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full md:w-10 md:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg className="w-5 h-5 text-white md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

