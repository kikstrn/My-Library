function FC(quoiChopper){
  let canHaveName = ["button","fieldset","form","iframe","input","map","meta","object","output","param","select","textarea"];
  let canIt = false;
  let indName = -1;
  let entreCrochet = "";
  let valueAvantName = "";
  let tempStore = "";
  let arrOfElt = [];
  if(quoiChopper[0]=="."){//GET BY CLASS
    //Check if there's a Name to find with it
    indName = quoiChopper.indexOf("[")
    if(indName != -1){
      //stock the value before the name to search
      for (let avantName = 1 ; avantName < indName ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      //stock the value of the name
      for (let eltToGet = indName+1; eltToGet < quoiChopper.length-1; eltToGet++) {
        tempStore += quoiChopper[eltToGet];
      }
      for(let allEltToGet = 0;allEltToGet < document.getElementsByClassName(valueAvantName).length; allEltToGet++){
        for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
          //check each elements with this class if they can have a name and if yes if they have the name researched
          if(document.getElementsByClassName(valueAvantName)[allEltToGet].localName == canHaveName[mayHaveName]){
            if(document.getElementsByClassName(valueAvantName)[allEltToGet].name==tempStore){
              arrOfElt.push(document.getElementsByClassName(valueAvantName)[allEltToGet]);
              canIt = true;
              break
            }
          }
        }
      }
      if(canIt){
        return arrOfElt;
      } else {
        //return an error if it can't find an element with the class or with the name or if there's no element with the class capable to have a name
        CE("Un erreur s'est produite soit : \n-aucun élément possédant la class recherché n'accepte de name\n-le name n'a pas était trouvé")
      }
    } else {
      //stock the value of the class researched
      for (let avantName = 1 ; avantName < quoiChopper.length ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      return document.getElementsByClassName(valueAvantName);
    }
  } else if(quoiChopper[0]=="#"){//GET BY ID
    indName = quoiChopper.indexOf("[");
    //Check if there's a Name to find with it
    if(indName != -1){
      //stock the value before the name to search
      for (let avantName = 1 ; avantName < indName ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      //stock the value of the name
      for (let eltToGet = indName; eltToGet < quoiChopper.length-1; eltToGet++) {
        tempStore += quoiChopper[indName];
      }
      for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
        //check the element with this id if it can have a name and if yes if it have the name researched
        if(document.getElementById(valueAvantName).localName == canHaveName[mayHaveName]){
          canIt = true;
          return document.getElementById(valueAvantName);
        }
      }
      if(!canIt){
        //return an error if it can't find an element with the id or with the name or if the element with the id isn't capable to have a name
        CE("Un erreur s'est produite soit : \n-aucun élément possédant l'id recherché n'accepte de name\n-le name n'a pas était trouvé")
      }
    } else {
      for (let avantName = 1 ; avantName < quoiChopper.length ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      return document.getElementById(valueAvantName);
    }
  } else if(quoiChopper[0]=="["){//GET BY NAME
    //stock the value of the name
    for (let eltToGet = 1; eltToGet < quoiChopper.length-1; eltToGet++) {
      entreCrochet += quoiChopper[eltToGet];
    }
    for (let eltName = 0; eltName < document.getElementsByName(entreCrochet).length; eltName++){
      for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
        //check if the elements with the name can have a name
        if(document.getElementsByName(entreCrochet)[eltName].localName == canHaveName[mayHaveName]){
          canIt=true;
          arrOfElt.push(document.getElementsByName(entreCrochet)[eltName]);
          break
        }
      }
    }
    if(canIt){
      return arrOfElt;
    } else {
      //return an error if the name cannot be find or if only an element which shouldn't have one is found
      CE("Un erreur s'est produite soit : \n-aucun élément ne contient ce name ou vous en avez attribué un à un élément qui ne le prévoie pas.")
    }
  } else {//GET BY ELEMENT
    indName = quoiChopper.indexOf("[");
    //Check if there's a Name to find with it
    if(indName != -1){
      //stock the value before the name to search
      for (let avantName = 0 ; avantName < indName ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      //stock the value of the name
      for (let eltToGet = indName+1; eltToGet < quoiChopper.length-1; eltToGet++) {
        tempStore += quoiChopper[eltToGet];
      }
      for(let allEltToGet = 0;allEltToGet < document.getElementsByTagName(valueAvantName).length; allEltToGet++){
        for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
          //check each elements searched if they can have a name and if yes if they have the name researched
          if(document.getElementsByTagName(valueAvantName)[allEltToGet].localName == canHaveName[mayHaveName]){
            if(document.getElementsByTagName(valueAvantName)[allEltToGet].name==tempStore){
              arrOfElt.push(document.getElementsByTagName(valueAvantName)[allEltToGet]);
              canIt = true;
              break
            }
          }
        }
      }
      if(canIt){
        return arrOfElt;
      } else {
        //return an error if it can't find the element or the name on an elements or if the element isn't capable to have a name
        CE("Un erreur s'est produite soit : \n-aucun élément recherché n'accepte de name\n-le name n'a pas était trouvé")
      }
    } else {
      return document.getElementsByTagName(quoiChopper);
    }
  }
}

function on(monEvent,monElement,monAction){
  //check if the element is an array
  if(monElement.length != undefined){
    each(monElement,(elt)=>{
      elt.addEventListener(monEvent,monAction,false);
    });
  } else {
    monElement.addEventListener(monEvent,monAction,false);
  }
}

function addClass(maClass,monElement) {
  //check if the element is an array
  if(monElement.length != undefined){
    each(monElement,(elt)=>{
      let mesClass = elt.className.split(" ");
      if (mesClass.indexOf(maClass) == -1) {
        elt.className += " " + maClass;
      }
    });
  } else {
    let mesClass = monElement.className.split(" ");
    if (mesClass.indexOf(maClass) == -1) {
      monElement.className += " " + maClass;
    }
  }
}
function delClass(maClass,monElement){
  //check if the element is an array
  if(monElement.length != undefined){
    each(monElement,(elt)=>{
      elt.className = elt.className.replace(maClass, "");
    });
  } else {
    monElement.className = monElement.className.replace(maClass, "");
  }
}
function toggleClass(maClass, monElement){
  //check if the element is an array
  if(monElement.length != undefined){
    each(monElement,(elt)=>{
      //check if the element have a class
      if (elt.classList) {
        elt.classList.toggle(maClass);
      } else {
        //create an array of classes
        let classes = elt.className.split(" ");
        //search if the class already exist
        let i = classes.indexOf(maClass);

        if (i >= 0) {
          //delete class if it exist
          classes.splice(i, 1);
          elt.className = classes.join(" ");
        } else {
          //add class if it exist
          classes.push(maClass);
          elt.className = classes.join(" ");
        }
      }
    });
  } else {
    if (monElement.classList) {
      monElement.classList.toggle(maClass);
    } else {
      let classes = monElement.className.split(" ");
      let i = classes.indexOf(maClass);

      if (i >= 0) {
        classes.splice(i, 1);
        monElement.className = classes.join(" ");
      } else {
        classes.push(maClass);
        monElement.className = classes.join(" ");
      }
    }
  }
}


function addStyle(myElement,myStyle){
  //check if the element is an array
  if(myElement.length != undefined){
    each(myElement,(elt)=>{
      //check if there's more than one style to add
      if(myStyle.length>1){
        for (let i = 0; i < myStyle.length; i++) {
          elt.setAttribute("style",myStyle[i]);
        }
      }else{
        elt.setAttribute("style",myStyle[0]);
      }
    });
  } else {
    //check if there's more than one style to add
    if(myStyle.length>1){
      for (let i = 0; i < myStyle.length; i++) {
        myElement.setAttribute("style",myStyle[i]);
      }
    }else{
      myElement.setAttribute("style",myStyle[0]);
    }
  }
}


function show(monElement) {
  //check if the element is an array
  if(monElement.length != undefined){
    each(monElement,(elt)=>{
      elt.style.display = "initials";
    });
  } else {
    monElement.style.display = "initials";
  }
}

function hide(monElement) {
  //check if the element is an array
  if(monElement.length != undefined){
    each(monElement,(elt)=>{
      elt.style.display = "none";
    });
  } else {
    monElement.style.display = "none";
  }
}

function CL(msg){
  console.log(msg);
}
function CE(msg){
  console.error(msg);
}

function each(Tableau,myFunction){
  for(let i = 0; i < Tableau.length; i++) {
    myFunction(Tableau[i])
  }
}
function ready(myFunction){
  //Each time the state of the DOM change
  //Check if the DOM is ready
  //If yes do the action wanted
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      myFunction;
    }
  };
}
