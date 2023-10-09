<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>this ans is "A" because this variable is defined at first.so there no chance for option "c".after defining the (greeting) variable,next line assigned its value. </b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>sum function's both paramitre is not a number.one is string of that two paramitre.thats why the function dont sum that 2 paramitre,the function concatinate that 2 paramitre,and return value is ("12") which is a string.</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>info object just teke a index number valu of "food" array.it don't take food array's reference. so do any thing with info variable. in will not change a bit of food variable</b></summary>
<p>

#### Answer: A

<i>Write your explanation here</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>inthis function name function is not defined when its called.so "name" paramitre valu is undefined. when the function is return it just return a string , where "name"paremitre "undefined"value is concatinated.</b></summary>
<p>

#### Answer: B

<i>Write your explanation here</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>we know that (0) is a falsy value.when we run a foreach on nums variable,for first index valu (0) if block is not fired and thats why conunt valu is not incremented. but for other elements of nums variable is truthy.for them if block is fired and "count variable value is incremented 3 time with (1).thats why total count value is 3.</b></summary>
<p>

#### Answer: C

<i>Write your explanation here</i>

</p>
</details>
