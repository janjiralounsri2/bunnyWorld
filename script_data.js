function getItemsData(id, e) {
  id; 
  console.log("myData", id_data);

  if(id == 'data-1'){
    document.getElementById("id_data").innerHTML = "01 / SPECIES"
    document.getElementById("name_data").innerHTML = "European Rabbit"
  }else if(id == 'data-2'){
    document.getElementById("id_data").innerHTML = "02 / SPECIES"

  }
  else{
    document.getElementById("id_data").innerHTML = "01 / SPECIES"
    document.getElementById("name_data").innerHTML = "European Rabbit"
  }

}