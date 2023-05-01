# WTApp
#### Want to know the recent weather in an area? Well the weather application returns the simple details about it.
![Image](image.png)
### Techstack used
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)![](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)![](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
- - - -
### Running Django Backend
we can run the following project by first downloading all the dependencies from the requirements.txt file by
```
>> pip install -r requirements.txt
```
This ensures all the libraries are downloaded for the django backend then:
```
>> cd backend
>> \backend> python manage.py runserver
```
This runs the django server for the backend
- - - -
### Running WTApp
We need to first ensure that you have NodeJS installed, if download it from here: [Download NodeJS](https://nodejs.org/en)

After this we run either of the following commands on the terminal, first being starting the source files:
```
>> cd frontend
>> \frontend> npm start
```
Or we can make a build and then run the optimized production build
```
>> cd frontend
>> \frontend> npm run build
>> \frontend> serve -s build
```
Now we can enter any city name and return the values of temperature in celcius and its humidity%
