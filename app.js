window.onload = () => {
  class Pagination {
    constructor(items = [], pageSize = 10) {
      this.items = items;
      this.pageSize = pageSize;
    }

    getPage(n) {
      //se n=1-> slice da 0 a 10, slice da pageSize*0 a pageSize*1
      //se n=2-> slice da 10 a 20, slice da pageSize*1 a pageSize*2
      //se n=3-> slice da 20 a 30, slice da pageSize*2 a pageSize*3
      let startIndex = this.pageSize * (n - 1);
      let finalIndex = this.pageSize * n;
      let page = this.items.slice(startIndex, finalIndex);
      return page;
    }
    getPagesNum() {
      //esempio se array di 32 e size di 5 le pagine saranno: 32/5 + 32%5 = 6+2
      if (this.items.length % this.pageSize === 0) {
        return this.items.length / this.pageSize;
      }
      return this.items.length / this.pageSize + 1;
    }
  }
  //esempio 1:
  //   let p = "questa frase lunga verrà separata in lettere e paginata";
  //   let pagina = new Pagination(p.split(""));

  //Esempio 2: elenco impiegti
  class Employer {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    toString() {
      return this.name + " ha " + this.age + " anni";
    }
  }

  //creo array di 32 impiegati
  let employers = [];

  for (let i = 0; i < 32; i++) {
    let e = new Employer("Andrea_" + i, i + 15); //età casuale
    employers.push(e);
  }
  console.log(employers);

  //creo paginazione
  let elementiPerPagina = 5;
  let paginazione = new Pagination(employers, elementiPerPagina);

  //aggiungo pagina all'html
  const handlePage = function (e) {
    let list = document.querySelector(".employers");
    list.firstChild.remove(); //reset lista

    let ul = document.createElement("ul");

    let pageNumber = e.target.textContent;
    let pageEmployers = paginazione.getPage(pageNumber);

    pageEmployers.forEach((employer) => {
      let li = document.createElement("li");
      li.textContent = employer.toString();
      ul.appendChild(li);
    });
    list.appendChild(ul);
  };

  let indicators = document.querySelector(".pagination");

  //indicatori di pagina
  for (let i = 1; i <= paginazione.getPagesNum(); i++) {
    let index = document.createElement("button");
    index.textContent = i;
    index.onclick = handlePage;
    indicators.appendChild(index);
  }

  //prima pagina :
  let list = document.querySelector(".employers");
  list.firstChild.remove(); //reset lista

  let ul = document.createElement("ul");

  let pageNumber = 1;
  let pageEmployers = paginazione.getPage(pageNumber);

  pageEmployers.forEach((employer) => {
    let li = document.createElement("li");
    li.textContent = employer.toString();
    ul.appendChild(li);
  });
  list.appendChild(ul);
  //
};
