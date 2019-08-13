import lodashGet from "lodash.get";

export const transformResponse = ({ data, type }) => {
  switch (type) {
    case "recipes":
      return transformRecipes(data);
    default:
      return data;
  }
};

const transformRecipes = data => {
  const recipes = lodashGet(data, "contents");
  const mappedRecipes = recipes =>
    recipes.map(article => ({
      id: article.contentId,
      title: article.title,
      shortUrl: "/recipes/" + article.urlPartial,
      imageMobile: lodashGet(article, "imageList.landscapemobile1x.url"),
      imageDesktop: lodashGet(article, "imageList.landscapewidedesktop1x.url")
    }));
  if (recipes.length > 0) {
    return mappedRecipes(recipes);
  }
  return [];
};
