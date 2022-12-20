# rsschool-cv
***
## Makavetskaya Tatsiana
<img width="150" alt="photo" src="https://user-images.githubusercontent.com/90634573/208473380-58334866-1f3d-406b-87e5-cef3c966a87d.png">

***
### Contacts
***
* **Location:** Minsk, Belarus
* **Phone:** +375 29 263-53-85
* **Email:** makavetskaya.t@gmail.com
* [GitHub](https://github.com/Makavetskaya)
* [LinkedIn](https://www.linkedin.com/in/tatsiana-makavetskaya-683792243/)
### About me 
**********
I am 27 years old, I am a beginner front-end developer. In development for about a year, I started with courses, today I am learning front-end development on my own. I like programming, and I also like to draw (I'm a graphic designer by education). I want to gain knowledge and skills that will be enough for employment in the company.
### Skills
***********
* HTML5
* CSS(SASS/SCSS, BEM)
* JavaScript 
* Git
* Module Bundlers: Webpack
* React JS, Redux (entry level knowledge)
* Adobe Photoshop, Illustrator, Figma
### Code Examples
*********
Permutations KATA from CODEWARS: In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. 
This means, you have to shuffle all letters from the input in all possible orders.
```
function permutations(string) {
  if(string.length == 1) return [string];
  let arr = string.split(''),
      tmp = arr.slice(), 
      heads = [], 
      out = [];

  arr.forEach((v, i, arr)=> {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations(tmp.join('')).forEach((w)=>{out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}
```
```
### Courses
* [TeachMeSkills](https://teachmeskills.by/)
### Language
**********
* [EPAM English test result:](https://examinator.epam.com/Main/PersonalAssignments/514865) **A1** I try to learn English in every possible way. I use application in smartphone: EWA and I use google translate a lot.
