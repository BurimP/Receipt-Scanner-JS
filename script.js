fetch(
  "https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1"
)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);

    let domestic = data.filter((elem) => elem.domestic == true);
    let imported = data.filter((elem) => elem.domestic == false);

    let domesticCount = domestic.length;
    let importedCount = imported.length;

    const sortedDomestic = domestic.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; //nameB comes first
      }
      return 0; //names must be equal
    });
    console.log(sortedDomestic);

    const sortedImported = imported.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; //nameB comes first
      }
      return 0; //names must be equal
    });

    console.log(sortedImported);

    let domesticPrice = 0;
    let importedPrice = 0;

    for (let i = 0; i < domestic.length; i++) {
      domesticPrice += domestic[i].price;
    }
    console.log(domesticPrice + "$");

    for (let i = 0; i < imported.length; i++) {
      importedPrice += imported[i].price;
    }
    console.log(importedPrice + "$");

    //Add elements to the DOM

    //Domestic

    let domestic_table = document.getElementById("domestic_table");
    let newTr = document.createElement("tr");
    domestic_table.append(newTr);

    let firstTd = document.createElement("td");
    firstTd.innerHTML = "Name";
    newTr.append(firstTd);

    let secondTd = document.createElement("td");
    secondTd.innerHTML = domestic[0].name;
    newTr.append(secondTd);

    //Imported
  });
