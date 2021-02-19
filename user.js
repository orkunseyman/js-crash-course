module.exports= class Users {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.maps=[];
        this.followingCategories=[];
    }
    createMap(map){
        this.maps.push(map);
    }
    followCategory(category){
        this.followingCategories.push(category);
    }
    //printFollowingMaps(){
    //    console.log(this.followingCategories.forEach(category => category.maps.forEach((map) => console.log(map.name)))); 
    //}
    printCreatedMaps(){
        console.log(this.maps.forEach(map => console.log(map.name +" "+ map.category.name))); 
    }
}