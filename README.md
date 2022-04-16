
## FitMatch

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E 'JavaScript') ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB 'React') ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white 'React-Router') ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white 'MUI') ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white 'Node.js') ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB 'Express') ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white "PostgreSQL")

### Setup: 

1. Fork and clone this repo, then open two terminal tabs and navigate to the root directory.

2. In one of the two seperate terminal tabs run the following script:
  ```
  npm start
  ```

3. In the second terminal tab run:
  ```
  npm run react-dev
  ```

4. Open localhost:3000 in the browser 

### Overview:
<p>FitMatch is a webapp that intends to allow users save their physical clothing in an online closet. The app also allows users to build an outfit in which all of the clothes match, in order to allow users who struggle telling colors apart ensure that their outfit does not clash with itself.</p>

### Functionality:
- On loading the page, an API call will be made to a weather api to grab the current weather conditions of the user's location in order to recommend what "top" the user should start their outfit with
  1. If the weather shows rain or snow: The app will recommend a jacket
  2. If the weather shows a temperature that the user considers "Chilly": The app will recommend the user starts with a sweater 
  3. If the weather shows nice weather: The app will recommend a T-shirt to get the user's outfit started
 
![](https://media.giphy.com/media/2ZbZNSmo7TCdt41nDO/giphy.gif)
- Users are able to navigate the page using the navbar and buttons or using the back and forward browser bottons

- The "Check a Color" and "Add to Closet" buttons both change when hoverd. Clicking either button will result in a modal popping up that allows for user input. The "Add to Closet" button is more built out and allows users to add items to their closets. Users are able to chose the type of itme they are uploading, the color of said item, a quick description, and a picture of the item. All of the information is then saved to the postgres database. 

![](https://media.giphy.com/media/jA3IEWIL8wuk4p317b/giphy.gif)

- Users Can view their entire closet in the "build" page. Upon clicking "Add item to Outfit" the selected item will be added to the outfit below, and the entire page will re-render to only show items that are of colors that match with the first selected item. As Users Add items, the outfit will continue to expand below.

![](https://media.giphy.com/media/97fdScJwrLqguiTzb2/giphy.gif)

### Future Plans: 
- Implement greater funtionality in the check a color button so that users can check the color of items that they are unsure about. 
- Allow users to save favorite outfits that can then be viewed in a third page, "Favorites"
- Allow users to remove the items that are in their outfit if they decide to.
- Allows users to filter closet to only see items of specific colors or color schemes.
