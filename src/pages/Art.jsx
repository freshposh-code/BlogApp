import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://www.w3schools.com/css/img_lights.jpg",
    },
    {
      id: 2,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusdwEvxV2PtAtedyovJHIfR3dqRSOb9roSnEf61DBYAVxIoKAVU1grJGbKz_aiINtsko&usqp=CAU",
    },
    {
      id: 3,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://www.w3schools.com/css/img_lights.jpg",
    },
    {
      id: 4,
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo ",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo aspernatur ipsam minima. Quam incidunt nemo suscipit, nostrum neque molestias pariatur voluptatum. Necessitatibus, at ut",
      img: "https://www.w3schools.com/css/img_lights.jpg",
    },
  ];
  return (
    <>
      <div className="home">
        <div className="posts">
          {posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={post.img} alt="" />
                </div>
                <div className="content">
                  <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <p>{post.desc}</p>
                  <div className="buttton">
                    <button>Read more</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
