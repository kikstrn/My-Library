function vSeb(quoiChopper){
  let canHaveName = ["button","fieldset","form","iframe","input","map","meta","object","output","param","select","textarea"];
  let canIt = false;
  let indName = -1;
  let entreCrochet = "";
  let valueAvantName = "";
  let tempStore = "";
  let arrOfElt = [];
  if(quoiChopper[0]=="."){//GET BY CLASS
    indName = quoiChopper.indexOf("[")
    if(indName != -1){
      for (let avantName = 1 ; avantName < indName ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      for (let eltToGet = indName+1; eltToGet < quoiChopper.length-1; eltToGet++) {
        tempStore += quoiChopper[eltToGet];
      }
      for(let allEltToGet = 0;allEltToGet < document.getElementsByClassName(valueAvantName).length; allEltToGet++){
        for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
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
        CE("Un erreur s'est produite soit : \n-aucun élément possédant la class recherché n'accepte de name\n-le name n'a pas était trouvé")
      }
    } else {
      for (let avantName = 1 ; avantName < quoiChopper.length ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      return document.getElementsByClassName(valueAvantName);
    }
  } else if(quoiChopper[0]=="#"){//GET BY ID
    indName = quoiChopper.indexOf("[");
    if(indName != -1){
      for (let avantName = 1 ; avantName < indName ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      for (let eltToGet = indName; eltToGet < quoiChopper.length-1; eltToGet++) {
        tempStore += quoiChopper[indName];
      }
        for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
          if(document.getElementById(valueAvantName).localName == canHaveName[mayHaveName]){
            canIt = true;
            return document.getElementById(valueAvantName);
          }
        }
        if(!canIt){
          CE("Un erreur s'est produite soit : \n-aucun élément possédant l'id recherché n'accepte de name\n-le name n'a pas était trouvé")
        }
    } else {
      for (let avantName = 1 ; avantName < quoiChopper.length ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      return document.getElementById(valueAvantName);
    }
  } else if(quoiChopper[0]=="["){
    for (let eltToGet = 1; eltToGet < quoiChopper.length-1; eltToGet++) {
      entreCrochet += quoiChopper[eltToGet];
    }
    for (let eltName = 0; eltName < document.getElementsByName(entreCrochet).length; eltName++){
      for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
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
      CE("Un erreur s'est produite soit : \n-aucun élément ne contient ce name ou vous en avez attribué un à un élément qui ne le prévoie pas.")
    }
  } else {//GET BY ELEMENT
    indName = quoiChopper.indexOf("[");
    if(indName != -1){
      for (let avantName = 0 ; avantName < indName ; avantName++){
        valueAvantName += quoiChopper[avantName];
      }
      for (let eltToGet = indName+1; eltToGet < quoiChopper.length-1; eltToGet++) {
        tempStore += quoiChopper[eltToGet];
      }
      for(let allEltToGet = 0;allEltToGet < document.getElementsByTagName(valueAvantName).length; allEltToGet++){
        for(let mayHaveName = 0; mayHaveName < canHaveName.length; mayHaveName++){
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
        CE("Un erreur s'est produite soit : \n-aucun élément recherché n'accepte de name\n-le name n'a pas était trouvé")
      }
    } else {
      return document.getElementsByTagName(quoiChopper);
    }
  }
}

function on(monEvent,monElement,monAction){
    monElement.addEventListener(monEvent,monAction,false);
}

function addClass(maClass,monElement) {
  let mesClass = monElement.className.split(" ");
  if (mesClass.indexOf(maClass) == -1) {
    monElement.className += " " + maClass;
  }
}
function delClass(maClass,monElement){
  monElement.className = monElement.className.replace(maClass, "");
}
function toggleClass(maClass, monElement){
    if (monElement.classList) {
      monElement.classList.toggle(maClass);
    } else {
      let classes = monElement.className.split(" ");
      let i = classes.indexOf(maClass);

      if (i >= 0) {
        classes.splice(i, 1);
      } else {
        classes.push(maClass);
        monElement.className = classes.join(" ");
      }
    }
}


function show(monElement) {
  monElement.style.display = "initials";
}

function hide(monElement) {
  monElement.style.display = "none";
}


function CL(msg){
  console.log(msg);
}
function CE(msg){
  console.error(msg);
}












