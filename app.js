const homePageLoad = () => {
    // let url = 'https://openapi.programming-hero.com/api/news/category/08'
  fetch("https://openapi.programming-hero.com/api/news/category/08")
    .then((response) => response.json())
    .then((data) => displayPost(data.data, 'Home'))
    .catch((err) => console.error(err));
}

homePageLoad();



const loadCatagory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((response) => response.json())
    .then((data) => displayCatagory(data.data.news_category))
    .catch((err) => console.error(err));
};

loadCatagory();

const displayCatagory = (data) => {
  const ul = document.getElementById("catagories");
  data.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = `
        <li class="nav-item">
          <a class="nav-link" onclick="loadNewsPost('cata${element.category_id}', '${element.category_id}','${element.category_name}')" id="cata${element.category_id}" href="#">${element.category_name}</a>
        </li>
        `;
    ul.appendChild(li);
    // console.log(element.category_id);
  });
};

const loadNewsPost = (data, data2, name) => {
  const id = document.getElementById(data);
  let url = `https://openapi.programming-hero.com/api/news/category/${data2}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data.data, name))
    .catch((err) => console.error(err));
};



const displayPost = (data, name) => {
//   console.log(data, name);
  let parentDiv = document.getElementById("parentDiv");
  parentDiv.innerHTML='';

  data.forEach((data) => {
    let div = document.createElement("div");
    console.log(data);

    // data.details.slice(0, 100)+'...'

    div.innerHTML = `
    <div class="card mb-3 pt-3 pb-3" >
    <div class="row g-0 pb-0">
      <div class="col-md-2 ps-3 pe-3 thumb ">
        <img src=${data.thumbnail_url}  alt="...">
      </div>
      <div class="col-md-10 pt-0 pb-0">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.details.slice(0, 700)+'...'}</p>
          <div class="d-flex justify-content-between align-items-end pe-5">
            <div>
                <a class="navbar-brand" href="#">
                    <img
                      src="./Images/siam-bg1.png"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </a>
                  <span>Siam Shahriar</span>
            </div>
            <div>
                <i class="bi bi-eye"></i>
                <span>${data.total_view ? data.total_view : 'No data found'}</span>
            </div>
            <div>
                <a href="#modalCenter" role="button" class="" data-bs-toggle="modal"><i class="bi bi-arrow-right">
                </i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    parentDiv.appendChild(div);
  });

  let numberOfItems = document.getElementById('item-found-counter');
  numberOfItems.innerHTML = '';
  let span = document.createElement('span');
  span.innerHTML = `
    <span>${data.length} items found for category ${name}</span>
  
  `;
  numberOfItems.appendChild(span);
  numberOfItems.classList.remove('d-none');
};
