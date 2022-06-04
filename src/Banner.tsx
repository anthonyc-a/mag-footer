import React from "react";

const Banner = () => {
  const bannerDupe = () => {
    var bannerList = [];
    for (var i = 0; i < 5; i++) {
      bannerList.push(<h1 key={i}>Available Now —</h1>);
    }
    return bannerList;
  };

  return (
    <div className="banner">
      <div className="banner-inner">{bannerDupe()} </div>
    </div>
  );
};

export default Banner;
