import React from "react";
// import { Link } from "react-router-dom";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://www.w3schools.com/css/img_lights.jpg",
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusdwEvxV2PtAtedyovJHIfR3dqRSOb9roSnEf61DBYAVxIoKAVU1grJGbKz_aiINtsko&usqp=CAU",
    },
    {
      id: 3,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://www.w3schools.com/css/img_lights.jpg",
    },
    {
      id: 4,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://www.w3schools.com/css/img_lights.jpg",
    },
  ];

  return (
    <>
      <div className="menu">
        <h1>Other post u may like</h1>
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="image">
                <img src={post.img} alt="" />
              </div>
              <h2>{post.title}</h2>
              <div className="click">
                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
