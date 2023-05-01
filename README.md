# WTApp
#### Want to know the recent weather in an area? Well the weather application returns the simple details about it.
![Image](image.png)
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
