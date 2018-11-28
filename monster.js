class monster {
constructor(name,scareRank,ability) {
    this._name = name;
    this._scareRank = scareRank;
    this._ability = ability;
}
get name(){
    return this._name
}
get scareRank(){
    return this._scareRank
}
changeName(newName){
    this._name=newName;
}
rank(){
    this._scareRank= +3;
}
attack(atk){
    console.log(`${this.name} attack`);
}
} 
let monster1 = new monster('shanka',32);
class evolvedmonster extends monster{
    constructor(name,strength,ability){
    super (name,strength);
    
        this._ability = ability;
    }
    get ability (){
        return this._ability;
    }





