## Movies App
Online movie appliaction.
Movies app simulates online movies site,that alows you to add,delete movies,actors and movie theaters.
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

Install EBook App with npm

```bash
  npm install
```

## Connenting To Backend Api
By default the client side is connecting the client side to localhost backend.



## API Access
| User              | Password                   | Access       |  Access & Abilities           |        
| :---------------  | :------------------------- | :----------- | :-----------
| admin@gmail.com   | Aa123456!                    | Administrator|  Full access to any page in the app and observe <strong>any user & order</strong> details.<br> Purchase products.<br>Add/Edit/Delete products, any user's orders and accounts <br> Modify <strong>any user's</strong> account details: username/email/password.<br> Can Change the permission levels of <strong>all users</strong>.<br>The only one who can see the buttons for adding, editing and deleting products.|
| user@email.com    | Bb@4321                    | User         |Full access to any page in the app and observe <strong>its own</strong> user details.<br> Purchase products.<br>Observe <strong>its own</strong> user details.<br>Add/Edit/Delete <strong>its own</strong> orders.<br> Modify <strong>its own</strong> account's details:  username/email/password. |
| visitor@email.com | Cc@1324                    | Visitor      |Limited access.<br> Purchase products. <br> Observe <strong>its own</strong> user details.<br>Add/Edit/Delete <strong>its own</strong> orders.<br> Modify <strong>its own</strong> account's details: username/email/password.<br><strong>Not authorized</strong> to see "my book" page. |
