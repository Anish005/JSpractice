//const tinderUser = new Object()
const tinderUser = {}
//both the above are singleton object
tinderUser.id = "12213sabns"
tinderUser.name = "max"
tinderUser.isLogged = false


//console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"anish",
            lastname:"panda"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);
//?-->optional chaining i.e if fullname doesnt exists then 


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}//same problem like of that of the arrays nested objects
const obj3 = Object.assign({},obj1,obj2)//without { } also gives result , remember what we did for array concat meth0d
//{}---also considers to be target, incase of more values to make sure object is returned to us serves us as an guarantee
console.log(obj3);

//we will use mostly the given below process
const obj4 = {...obj1,...obj2}
console.log(obj4);

//if values are retrieved from databases that are array of objects

const users = [
    {

    },
    {

    },
    {

    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//outputs comes in an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));//check if the object has a certain property or not

//destructuring objects

const course = {
    coursename:"js",
    price:"000",
    courseMentor:"anish"
}
//course.courseMentor

const {courseMentor} = course
//we can also do
const {price:cost} = course

console.log(courseMentor);
console.log(cost);

//useful for react same concept is used as given below example
/*const navbar = ({company}) =>{

}
navbar(company = "anish")*/
////API concept----JSON
// {
//     "name":"sads",
//     "coursestr":"anis",
//     "cost":"free"
// }
[
    {},
    {},
    {},
    {}
]

[{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }

]//JSON format remove the square brackets then




