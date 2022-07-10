import { useState, useEffect } from "react";

const useScrollDirection = () => {

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {

    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {

      const scrollY = window.pageYOffset;

      // check if lastScrollY is less than scrollY. if yes, scrolling down, else scrolling up
      const direction = scrollY > lastScrollY ? "down" : "up";

      // if the direction isn't the same as what is set in scrollDirection, then reset scrollDirection
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      // checks to see if you've got to the top
      lastScrollY = scrollY > 0 ? scrollY : 0;

    };
    
    // add event listener
    window.addEventListener("scroll", updateScrollDirection); 

    // clean up
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); 
    }

  }, [scrollDirection]);

  return scrollDirection;

};

  export { useScrollDirection };