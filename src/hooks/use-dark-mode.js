import {useState, useEffect} from 'react';

const useDarkMode = () => {
    const [click, setclick] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    useEffect(() => {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    },[]);
    const toggleThemeChange = () => {;
      if (click === false) {
        localStorage.setItem("theme", "dark");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
        setclick(true);
      } else {
        localStorage.setItem("theme", "light");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
        setclick(false);
      }
    }
    return toggleThemeChange;
};

export { useDarkMode };