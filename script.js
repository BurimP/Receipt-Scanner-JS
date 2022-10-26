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

    let totalDomesticPrice = 0;
    let totalImportedPrice = 0;

    for (let i = 0; i < domestic.length; i++) {
      totalDomesticPrice += domestic[i].price;
    }
    // console.log(totalDomesticPrice + "$");

    for (let i = 0; i < imported.length; i++) {
      totalImportedPrice += imported[i].price;
    }
    // console.log(importedPrice + "$");

    //Add elements to the DOM

    //Domestic
    objectLength = [];
    for (let i = 0; i < data.length; i++) {
      objectLength[i] = Object.keys(data[i]);
    }
    let domestic_table = document.getElementById("domestic_table");
    let first_row = [];
    for (let i = 0; i < objectLength[0].length; i++) {
      first_row[i] = document.createElement("tr");
    }
    domestic_table.append(first_row[0]);

    //name

    let domestic_name = document.createElement("td");
    domestic_name.innerHTML = "Name";
    first_row[0].append(domestic_name);
    domestic_name.id = "domestic_name";

    let domestic_name_value = document.createElement("td");
    domestic_name_value.innerHTML = domestic[0].name;
    first_row[0].append(domestic_name_value);

    //domestic or not

    domestic_table.append(first_row[1]);

    let isDomestic = document.createElement("td");
    isDomestic.innerHTML = "Domestic";
    first_row[1].append(isDomestic);

    let isDomesticValue = document.createElement("td");
    if (domestic[0].domestic === true) {
      isDomesticValue.innerHTML = "True";
    } else {
      isDomesticValue.innerHTML = "False";
    }
    first_row[1].append(isDomesticValue);

    // price

    domestic_table.append(first_row[2]);

    let domesticPrice = document.createElement("td");
    domesticPrice.innerHTML = "Price";
    first_row[2].append(domesticPrice);

    let domesticPriceValue = document.createElement("td");
    domesticPriceValue.innerHTML = `${domestic[0].price}$`;
    first_row[2].append(domesticPriceValue);

    // weight

    domestic_table.append(first_row[3]);

    let domesticWeight = document.createElement("td");
    domesticWeight.innerHTML = "Weight";
    first_row[3].append(domesticWeight);

    let domesticWeightValue = document.createElement("td");
    if (domestic[0].weight) {
      domesticWeightValue.innerHTML = domestic[0].weight;
    } else {
      domesticWeightValue.innerHTML = "N/A";
    }
    first_row[3].append(domesticWeightValue);

    // description

    domestic_table.append(first_row[4]);

    let domesticDescription = document.createElement("td");
    domesticDescription.innerHTML = "Description";
    first_row[4].append(domesticDescription);

    let domesticDescriptionValue = document.createElement("td");
    domesticDescriptionValue.innerHTML = domestic[0].description;
    first_row[4].append(domesticDescriptionValue);

    //===================================================== Second Domestic ============================================================= //

    let second_row = [];
    for (let i = 0; i < objectLength[0].length; i++) {
      second_row[i] = document.createElement("tr");
    }

    domestic_table.append(second_row[0]);

    //name

    let domestic_name2 = document.createElement("td");
    domestic_name2.innerHTML = "Name";
    second_row[0].append(domestic_name2);
    domestic_name2.id = "domestic_name2";

    let domestic_name2_value = document.createElement("td");
    domestic_name2_value.innerHTML = domestic[1].name;
    second_row[0].append(domestic_name2_value);

    // domestic or not

    domestic_table.append(second_row[1]);

    let isDomestic2 = document.createElement("td");
    isDomestic2.innerHTML = "Domestic";
    second_row[1].append(isDomestic2);

    let isDomesticValue2 = document.createElement("td");
    if (domestic[1].domestic === true) {
      isDomesticValue2.innerHTML = "True";
    } else {
      isDomesticValue2.innerHTML = "False";
    }
    second_row[1].append(isDomesticValue2);

    // price

    domestic_table.append(second_row[2]);

    let domesticPrice2 = document.createElement("td");
    domesticPrice2.innerHTML = "Price";
    second_row[2].append(domesticPrice2);

    let domesticPriceValue2 = document.createElement("td");
    domesticPriceValue2.innerHTML = `${domestic[1].price}$`;
    second_row[2].append(domesticPriceValue2);

    // weight

    domestic_table.append(second_row[3]);

    let domesticWeight2 = document.createElement("td");
    domesticWeight2.innerHTML = "Weight";
    second_row[3].append(domesticWeight2);

    let domesticWeightValue2 = document.createElement("td");
    if (domestic[1].weight) {
      domesticWeightValue2.innerHTML = domestic[1].weight;
    } else {
      domesticWeightValue2.innerHTML = "N/A";
    }
    second_row[3].append(domesticWeightValue2);

    // description

    domestic_table.append(second_row[4]);

    let domesticDescription2 = document.createElement("td");
    domesticDescription2.innerHTML = "Description";
    second_row[4].append(domesticDescription2);

    let domesticDescriptionValue2 = document.createElement("td");
    domesticDescriptionValue2.innerHTML = domestic[1].description;
    second_row[4].append(domesticDescriptionValue2);

    //===================================================== Imported ============================================================

    let imported_table = document.getElementById("imported_table");
    let third_row = [];
    for (let i = 0; i < objectLength[0].length; i++) {
      third_row[i] = document.createElement("tr");
    }
    imported_table.append(third_row[0]);

    //name

    let imported_name = document.createElement("td");
    imported_name.innerHTML = "Name";
    third_row[0].append(imported_name);
    imported_name.id = "imported_name";

    let importedNameValue = document.createElement("td");
    importedNameValue.innerHTML = imported[0].name;
    third_row[0].append(importedNameValue);

    // domestic or not

    imported_table.append(third_row[1]);

    let isDomestic3 = document.createElement("td");
    isDomestic3.innerHTML = "Domestic";
    third_row[1].append(isDomestic3);

    let isDomesticValue3 = document.createElement("td");
    if (imported[0].domestic) {
      isDomesticValue3.innerHTML = "True";
    } else {
      isDomesticValue3.innerHTML = "False";
    }
    third_row[1].append(isDomesticValue3);

    // price

    imported_table.append(third_row[2]);

    let importedPrice = document.createElement("td");
    importedPrice.innerHTML = "Price";
    third_row[2].append(importedPrice);

    let importedPriceValue2 = document.createElement("td");
    importedPriceValue2.innerHTML = `${imported[0].price}$`;
    third_row[2].append(importedPriceValue2);

    // weight

    imported_table.append(third_row[3]);

    let importedWeight = document.createElement("td");
    importedWeight.innerHTML = "Weight";
    third_row[3].append(importedWeight);

    let importedWeightValue = document.createElement("td");
    if (imported[0].weight) {
      importedWeightValue.innerHTML = imported[0].weight;
    } else {
      importedWeightValue.innerHTML = "N/A";
    }
    third_row[3].append(importedWeightValue);

    // description

    imported_table.append(third_row[4]);

    let importedDescription = document.createElement("td");
    importedDescription.innerHTML = "Description";
    third_row[4].append(importedDescription);

    let importedDescriptionValue = document.createElement("td");
    importedDescriptionValue.innerHTML = imported[0].description;
    third_row[4].append(importedDescriptionValue);

    let domestic_cost = document.getElementById("domestic_cost");
    domestic_cost.innerHTML = `${totalDomesticPrice}$`;

    let imported_cost = document.getElementById("imported_cost");
    imported_cost.innerHTML = `${totalImportedPrice}$`;

    let domestic_count = document.getElementById("domestic_count");
    domestic_count.innerHTML = domesticCount;

    let imported_count = document.getElementById("imported_count");
    imported_count.innerHTML = importedCount;
  });
