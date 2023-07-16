## Movies App
Online movie appliaction.
Movies app simulates online movies site,that alows you to add,delete,edit movies,actors and movie theaters.
The application has the option of adding, editing and deleting products. 3 authorization levels for users with different action options: visitor, user and admin.


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-Stack)
- [Installation](#installation)
- [Connenting To Backend Api](#connenting-to-backend-api)
- [API Access](#api-access)

## Features

- Adding movies,actors and removing them.
- Choosing on the map place of the movie theater.
- User Management panel - manage users and their permissions.


## Tech Stack
- Backend: C# ASP.NET Core.
- Frontend: react: "^18.2.0".
- Database: Microsoft SQL server with Entity Framework.
- Authentication: JWT & Identity Core.



## Installation

Install Movies App with npm

```bash
  npm install
```

## Connenting To Backend Api
By default the client side is connecting the client side to localhost backend.



## API Access
| User              | Password                   | Access       |  Access & Abilities           |        
| :---------------  | :------------------------- | :----------- | :-----------
| admin@gmail.com   | Aa123456!                    | Administrator|  Full access to any page in the app and observe <strong>any user & order</strong> details.<br> Add Movies.<br>Add/Delete Actors,Movies Theaters,Genres. <br> Can Change the permission levels of <strong>all users</strong>.<br>The only one who can see the buttons for adding and deleting Movies.|
| user@email.com    | Bb@4321                    | User         | Access for Movies and Filter Page |
