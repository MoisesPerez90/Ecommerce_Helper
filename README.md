# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Main Concept

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Getting Started

run, in db file and inside mysql environment, source squema.sql in order to reset or create the ecommerce database. 

### Seed the Database

After creating the database, go inside the general files and run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Run npm server.j` to sync the Sequelize models to the MySQL database on server and start it.

### Walkthrough video of the app's functionality

![Link] (https://drive.google.com/file/d/1aB4fOyTN0tlr3GFF0n3cPLDL27XdF_5G/view)

### Images of functionality
#### Categories
![image](https://user-images.githubusercontent.com/118077086/222984409-de3def7e-eb9c-4d03-8bf8-e1b4395c72d3.png)
#### Products
![image](https://user-images.githubusercontent.com/118077086/222984440-8d81bc8d-b9d9-4945-bbbd-e46fa90128a1.png)
#### Tags
![image](https://user-images.githubusercontent.com/118077086/222984450-caa850b1-ade4-42ec-83fb-75222fe8051c.png)


© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
