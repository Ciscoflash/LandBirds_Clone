import React, { useState, useEffect } from "react";
import { FaRegHandPointUp } from "react-icons/fa";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Show the button when the user scrolls down 100px
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute right-12 bottom-40">
      {isVisible && (
        <button
          className="scroll-to-top-button text-lg text-white"
          onClick={scrollToTop}
          title="Scroll to Top"
        >
          <div className="bg-blue-900 p-4">
            <FaRegHandPointUp size={23} />
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
