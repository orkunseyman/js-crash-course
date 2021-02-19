module.exports=class Categories {
    constructor(name){
        //this.maps=[];
        this.name=name;
    }
    static create({name}){
        return new Categories(name)
    }
}