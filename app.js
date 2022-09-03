const loadCatagory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(response => response.json())
    .then(data => displayCatagory(data.data.news_category))
    .catch(err => console.error(err));
};

loadCatagory();

const displayCatagory = (data) => {
    const ul = document.getElementById("catagories");
    data.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = `
        <li class="nav-item">
          <a class="nav-link" href="#">${element.category_name}</a>
        </li>
        `
        ul.appendChild(li);
        console.log(element.category_id);
    });
}