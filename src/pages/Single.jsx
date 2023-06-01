import React from "react";
import { Link } from "react-router-dom";
import Menu from "../component/Menu";

const Single = () => {
  return (
    <>
      <div className="single">
        <div className="content">
          <div className="first-image">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg"
              alt=""
            />
          </div>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="info">
              <span>Fresh</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to="/write?edit=2">
                <div className="mark">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
              </Link>
              <div className="delt">
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
          <div className="text">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              odit, quaerat modi laboriosam unde tempore velit consectetur ab
              sint ex veniam cumque atque quae quod voluptas molestias
              doloremque iusto quidem deleniti possimus dolor, in consequuntur?
              Laboriosam reiciendis libero in velit nihil dignissimos vero
              delectus id expedita sequi excepturi ratione qui voluptatibus,
              perspiciatis vel ullam ut officia esse tempore recusandae aut!
              Itaque, est fugit laborum soluta aliquam, quod consequatur aperiam
              voluptatum dicta, ullam numquam eum veniam nobis autem placeat
              maxime? Aut voluptatum vitae, numquam animi tempora error
              doloremque voluptatem
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              odit, quaerat modi laboriosam unde tempore velit consectetur ab
              sint ex veniam cumque atque quae quod voluptas molestias
              doloremque iusto quidem deleniti possimus dolor, in consequuntur?
              Laboriosam reiciendis libero in velit nihil dignissimos vero
              delectus id expedita sequi excepturi ratione qui voluptatibus,
              perspiciatis vel ullam ut officia esse tempore recusandae aut!
              Itaque, est fugit laborum soluta aliquam, quod consequatur aperiam
              voluptatum dicta, ullam numquam eum veniam nobis autem placeat
              maxime? Aut voluptatum vitae, numquam animi tempora error
              doloremque voluptatem
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              odit, quaerat modi laboriosam unde tempore velit consectetur ab
              sint ex veniam cumque atque quae quod voluptas molestias
              doloremque iusto quidem deleniti possimus dolor, in consequuntur?
              Laboriosam reiciendis libero in velit nihil dignissimos vero
              delectus id expedita sequi excepturi ratione qui voluptatibus,
              perspiciatis vel ullam ut officia esse tempore recusandae aut!
              Itaque, est fugit laborum soluta aliquam, quod consequatur aperiam
              <br></br>
              <br></br>
              recusandae id illo, laborum rerum quam sapiente illum quasi
              molestias odio dolorem! Praesentium repellat eaque itaque iusto
              nobis natus, consequatur quaerat illo animi impedit! Velit
              deserunt suscipit possimus vitae porro asperiores exercitationem,
            </p>
          </div>
        </div>
        <div className="menu">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Single;
