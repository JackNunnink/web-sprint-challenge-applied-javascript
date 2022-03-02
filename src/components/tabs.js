// import axios from "axios";
import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const newsTopics = document.createElement("div");
  const newsTab1 = document.createElement("div");
  const newsTab2 = document.createElement("div");
  const newsTab3 = document.createElement("div");
  const newsTab4 = document.createElement("div");
  const newsTab5 = document.createElement("div");

  
  newsTopics.appendChild(newsTab1);
  newsTopics.appendChild(newsTab2);
  newsTopics.appendChild(newsTab3);
  newsTopics.appendChild(newsTab4);
  newsTopics.appendChild(newsTab5);


  // newsTab1.addEventListener("click", () => {
  //   console.log("It's working");
  //   document.getElementsByClassName("headline")
  // })

  newsTopics.classList.add("topics");
  newsTab1.classList.add("tab");
  newsTab2.classList.add("tab");
  newsTab3.classList.add("tab");
  newsTab4.classList.add("tab");
  newsTab5.classList.add("tab");


  newsTab1.textContent = topics[0];
  newsTab2.textContent = topics[1];
  newsTab3.textContent = topics[2];
  newsTab4.textContent = topics[3];
  newsTab5.textContent = topics[4];


  return newsTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics/`)
    .then(resp => {
      console.log(resp);
      document.querySelector(`${selector}`).appendChild(Tabs(resp.data.topics));
    })
    .catch(err => {
      console.error(err);
    })
}

export { Tabs, tabsAppender }
