# Key People Insights
The **Key People Insights** is a platform where employees can answer questionaries about their jobs and how they are feeling.  
And with the dashboards, the managers and thr HR people can make better decisions.

## Screenshots
> Login  
![Login](https://i.ibb.co/yPgwSgV/desktop.png)

> Home  
![Home](https://i.ibb.co/4TTVYv3/home.png)  

> Questionary  
![Questionary](https://i.ibb.co/FWNc0cy/KPIs.gif)

> Dashboards  
![Dashboards](https://i.ibb.co/X4nzj3C/KPIs-1.gif)

### Setup

1. Clone the Repository  
```git clone git@github.com:soutoigor/kpi-test.git```  
2. Install dependencies  
```npm install```
3. Create a project in Firebase with the "Authentication with email and password" on and create a Cloud Firestore DB.  
4.  Create the following collections and documents: 
```JSON
 "{
  "questionaries": {
    "r4X6aiL4jECtmMJIL4eE": {
      "answeredBy": [], // array
      "endDate": 1608854400, // number
      "startDate": 1595894400, // number
      "name": "Pesquisa de clima", // string
      "questions": "questions/tcSiw8TFohwR7y11tava" // reference
    }
  },
  "questions": {
    "tcSiw8TFohwR7y11tava": {
      "questions": "[{"id": "f1ab36c5-4404-4386-ad22-cadb4179fe84","component": "SelectEmployees","label": "Quantos funcionários tem a sua empresa?"},{"id": "097fdaeb-fc89-4dbf-b5ea-6313f7e166d2","component": "SelectEmployeesTeam","label": "Quantas pessoas tem a sua equipe?"},{"id": "b058e8ba-e593-4ffe-8347-6fbc2338c381","component": "SelectOneToTen","label": "Qual a sua satisfação com a empresa?"},{"id": "9c44f40e-7fb1-4a91-a1d9-c1ce4f3b4451","component": "SelectOneToTen","label": "Como você avalia seu chefe?"}]" // string
    }
  },
  "answers": {}
}"
```
5. Create a `.env` file according with the `.env.example` file (the firebase project values).
6. Run the project  
```npm run start```
7. To verify the linter  
```npm run lint```
8. Fix some lint errors  
```npm run lint:fix```
