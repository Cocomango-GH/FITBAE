
# FITBAE

### Built by: [Sasha Amah](https://www.linkedin.com/in/sashaamah) 

<img src="https://img.shields.io/github/followers/Cocomango-GH.svg?style=social&label=Follow&maxAge=2592000">
    
:muscle: FitBae is a fitness tracking app designed to help you monitor and improve your overall health and fitness levels. The app offers a range of features and tools that make it easy to set goals, track progress, and stay motivated on your fitness journey.Fitbae is a Full-Stack React Web Application that utilizes Node.js, Express.js, React, MongoDB, Mongoose, and JavaScript. :muscle:

###ttps://fitbae.herokuapp.com/ 


App  dashbord
  login page , goals page , add goal page 
<img src="">
<img src="">
<img src="">
<img src="">

***technologies used***

-  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
-  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
-  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
-  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
- <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white">

- <img src="https://img.shields.io/badge/HTML-239120?  style=for-the-badge&logo=html5&logoColor=white"> 

- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

- <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
 
 - <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">


## :trophy: code behide Fitbae 

    useEffect( () =>{
        async function getGoal() {
        console.log(id)
        try{
        const goalData = await goalAPI.getGoal({goalId: id});
        console.log(goalData)
        setEditGoal(goalData)
        } catch (err) {
        console.error(err)
        }
        }
        getGoal();

    },[id]); 


    I it was a complicated task but this code is what made fitbae today if thnaks to my wonderful peers. 
    ```



 
 ### The future of FITBAE(roadmap)
 
- [ ] we want to add calorie counter for the users 
- [ ] we want to track the steps of the users
- [ ] we want to add water tracket to the app for users 
- [ ] we want a fully design application with logo
- [ ] we want to add workout meetup for the user in the area they reside. 
- [ ] we want to add workout videos and weekly meal preps for users 
