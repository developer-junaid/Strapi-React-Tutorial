## Strapi Tutorial

## Stack = React + GraphQl + Strapi

### Tutorial : :link: https://www.youtube.com/playlist?list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn

<img src='./src/images/home.png'>

## Steps

#### Start

##### Backend

- Create project directory `mkdir strapi-project`
- Create strapi backend `npx create-strapi-app backend`
- - Select Quickstart (Press enter)
- - Select No template (type n and enter)

---

#### Admin Area

- Create Admin Account
- If you want to run strapi server again
- - Navigate to backend `cd backend`
- - Run `npm run develop`

---

#### Content Types

- Collection Types (You'll have more than one)
- Single Type (Unique piece of content example: Home)
- Component (Reusable fields)

---

#### Creating Content Types

- Open Strapi admin panel
- Click `Content-Types-Builder`
- Click `create new collection type`
- - Give Singular Display name `review`
- - Click `continue`

---

#### Adding fields to Collection

- Select field for your collection type `Click Text`
- Name Field `title`
- Set Type `Short text`
- Click `advanced settings`
- Make it `required, unique`
- Click `add another field` and add fields and click `finish`
- Click `Save` to save Content type

---

#### Adding Entries To Collection

- Click Collection `Click Reviews from left panel`
- Click add `add new review`
- - title `Mario Golf`
- - Body `some text`
- - Rating `9`
- - Click Save and Click Publish to make it Public

---

#### Strapi API Routes

- You can see api routes strapi created inside backend/api/collectionName/config/routes.json

---

#### Permissions and Auth Requests

- Click Settings > Roles > Public
- Permissions (Check all boxes that are to be displayed to un auth users)
- Check `find and findone`
- Click `Save`

---

- Click Settings > Roles > Authenticated
- Permissions (For authenticated users)
- Check All
- Save

---

#### Creating User

- Click Users
- Click `Add new user`
- Add details
- Turn on `confirmed`
- role `authenticated`

---

---

##### Frontend

- Develop Frontend
- Fetch Data

## Packages Installation

```bash

```

## Tech Stack

- ReactJs
- Strapi
- GraphQl
