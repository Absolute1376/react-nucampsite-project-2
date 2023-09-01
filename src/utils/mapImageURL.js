import { baseUrl } from '../app/shared/baseUrl'; //imports the url where JSON survey is running.//

export const mapImageURL = (arr) => {
  return arr.map((item) => {
      return {
        ...item,  //.map creates a new array, ...item creates new objects to go into that array//
        image: baseUrl + item.image
      };
  });
};