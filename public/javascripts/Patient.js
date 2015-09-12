

var Patient = function(){
 this.id = 1;
 this.fname = "";
 this.lname = "";
 this.mob = 0000011111;
}

Patient.prototype.setFirstName = function(fname){
  this.fname = fname;
}

Patient.prototype.setLastName = function(lname){
  this.lname = lname;
}

Patient.prototype.getName = function(){
  return this.fname +" " + this.lname;
}

Patient.prototype.getMobile = function(){
  return this.mob;
}

Patient.prototype.setMobile = function(mob){
  this.mob = mob;
}

module.exports = Patient;
