function istouching(thing1, thing2){
  
    if (thing1.x - thing2.x < thing2.width/2 + thing1.width/2
      && thing2.x - thing1.x < thing2.width/2 +thing1.width/2
      && thing1.y - thing2.y < thing2.height/2 + thing1.height/2
      && thing2.y - thing1.y < thing2.height/2 + thing1.height/2) {
    
    return true;
  }
  else {
    return false;
    
  }
    
  }