// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kaustav",
            lastname: "majumdar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kaustav"
}

// coursee.courseInstructor

// const {courseInstructor} = course

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "kaustav",
//     "coursename": "js in hindi",
//     "price": "free"
// }