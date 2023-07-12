import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Bookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div>
      <FaStar
        className={isBookmarked ? "bookmark-filled" : "bookmark-empty"}
        onClick={handleBookmarkClick}
      />
      {isBookmarked ? <span></span> : <span></span>}
    </div>
  );
}

export default Bookmark;
