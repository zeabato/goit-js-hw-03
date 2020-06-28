"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;


for (let index in user) {
  console.log(index, user[index]);
}

