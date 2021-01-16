class Users {
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
    printFollowingMaps(){
        console.log(this.followingCategories.forEach(category => category.maps.forEach((map) => console.log(map.name)))); 
    }
    printCreatedMaps(){
        console.log(this.maps.forEach(map => console.log(map.name +" "+ map.category.name))); 
    }
}
class Maps {
    constructor(name,text,category,){
        this.name = name;
        this.text=text;
        this.category=category;
        category.maps.push(this);
    }
     
}
class Categories {
    constructor(name){
        this.maps=[];
        this.name=name;
    }
}
let development = new Categories("Development");
let orkun = new Users("Orkun","orkunseyman@gmail.com","1234");

let jsMap = new Maps("Js Road Map","Lorem ipsum dolor sit amet",development);
let goMap = new Maps("Go Road Map","Lorem ipsum dolor sit amet",development);
let cMap = new Maps("C Road Map","Lorem ipsum dolor sit amet",development);
let javaMap = new Maps("Java Road Map","Lorem ipsum dolor sit amet",development);

orkun.createMap(jsMap);
orkun.followCategory(development);
console.log("Following Categories Maps");
orkun.printFollowingMaps();
console.log("Created Maps");
orkun.printCreatedMaps();