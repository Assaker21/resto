import { useState } from "react";
import "./App.scss";
import Icon from "supercons";

function App() {
  const [selectedCat, setSelectedCat] = useState(0);
  const [categoriesHTML, setCategoriesHTML] = useState([]);

  const categories = [
    { name: "EXCLUSIVE DEALS", type: "horizontal" },
    { name: "BURGERS", type: "vertical" },
    { name: "PIZZA", type: "vertical" },
    { name: "SOFT-DRINKS", type: "vertical" },
    { name: "SANDWICHES", type: "vertical" },
  ];

  const items = [
    [
      {
        name: "TWO CHICKEN BURGERS",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 0,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "TWO MEAT BURGERS",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 0,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "MIX BURGERS DEAL",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 0,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
    ],
    [
      {
        name: "CHICKEN BURGER",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 1,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "MEAT BURGER",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 1,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
    ],
    [
      {
        name: "BARBECUE PIZZA",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 2,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "LEBANESE PIZZA",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 2,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "PEPERONI PIZZA",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 2,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
    ],
    [
      {
        name: "PEPSI",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 3,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "7UP",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 3,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "ICED TEA",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 3,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
    ],
    [
      {
        name: "CHICKEN HONEY MUSTARD",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 4,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "CHICKEN AVOCADO",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 4,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
      {
        name: "LAMB AVOCADO",
        price: 4.2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque officia suscipit fuga molestiae animi placeat temporibus hic recusandae commodi.",
        cat: 4,
        img: "https://media.istockphoto.com/id/922063448/photo/delicious-hamburger-with-lettuce-cheese-tomato-red-onion.jpg?s=612x612&w=0&k=20&c=zLG5II_jPyRQoFwhn0-Wo8nf5xHOHrk2nZCYBkPmbuM=",
      },
    ],
  ];

  function handleNavigation(cat) {
    setSelectedCat(cat);

    const targetElement = document.getElementById(categories[cat].name);

    if (targetElement) {
      const headerOffset = document.querySelector("header").offsetHeight;
      window.scrollTo(0, targetElement.offsetTop - headerOffset);
    }

    const catElement = document.getElementById("cat:" + categories[cat].name);

    if (catElement) {
      catElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }

  return (
    <div className="container">
      <header>
        <div className="top-header">
          <h1 className="name">Myros</h1>
          <div className="nav-buttons">
            <a className="nav-button">
              <Icon
                onPointerDown={(e) => {
                  e.target.parentElement.classList.add("pointer-down");
                }}
                onPointerUp={(e) => {
                  e.target.parentElement.classList.remove("pointer-down");
                }}
                onPointerCancel={(e) => {
                  e.target.parentElement.classList.remove("pointer-down");
                }}
                glyph="map-app"
                size={"100%"}
              />
            </a>
            <a className="nav-button">
              <Icon
                onPointerDown={(e) => {
                  e.target.parentElement.classList.add("pointer-down");
                }}
                onPointerUp={(e) => {
                  e.target.parentElement.classList.remove("pointer-down");
                }}
                onPointerCancel={(e) => {
                  e.target.parentElement.classList.remove("pointer-down");
                }}
                glyph="message-simple"
                size={"100%"}
              />
            </a>
          </div>
        </div>

        <div className="cat-header">
          {categories.map((item, index) => {
            return (
              <a
                key={"Cat: " + index}
                className={"cat " + (selectedCat == index ? "selected" : "")}
                id={"cat:" + item.name}
                onPointerDown={(e) => {
                  e.target.classList.add("pointer-down");
                }}
                onPointerUp={(e) => {
                  e.target.classList.remove("pointer-down");
                }}
                onPointerCancel={(e) => {
                  e.target.classList.remove("pointer-down");
                }}
                onClick={() => {
                  handleNavigation(index);
                }}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </header>

      <div className="header-offset"></div>

      {items.map((itemPack, index) => {
        return (
          <section key={"itemPack: " + index} id={categories[index].name}>
            <span className="title">{categories[index].name}</span>
            {categories[index].type == "vertical" && (
              <div className="vertical-deck">
                {itemPack.map((item, itemIndex) => {
                  return (
                    <div
                      className="vertical-card"
                      key={"item: " + index + " " + itemIndex}
                    >
                      <div className="vertical-card-info">
                        <span className="name">{item.name}</span>
                        <span className="price">${item.price}</span>
                        <span className="desc">{item.desc}</span>
                      </div>
                      <div className="vertical-card-img">
                        <img src={item.img} alt="" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {categories[index].type == "horizontal" && (
              <div className="horizontal-deck">
                {itemPack.map((item, itemIndex) => {
                  return (
                    <div
                      className="horizontal-card"
                      key={"item: " + index + " " + itemIndex}
                    >
                      <img src={item.img} alt="" />
                      <div className="horizontal-card-info">
                        <span className="name">{item.name}</span>
                        <span className="price">${item.price}</span>
                        <span className="desc">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}

      <footer>Designed by Charbel Assaker</footer>
    </div>
  );
}

export default App;
