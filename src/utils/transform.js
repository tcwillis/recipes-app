import lodashGet from "lodash.get";

export const transformRecipes = data => {
  const recipes = lodashGet(data, "contents");
  const mappedRecipes = recipes =>
    recipes.map(article => ({
      id: article.contentId,
      title: article.title,
      shortUrl: "/recipes/" + article.urlPartial,
      mobileImage: lodashGet(article, "imageList.landscapemobile1x.url"),
      image: lodashGet(article, "imageList.landscapewidedesktop1x.url")
    }));
  if (recipes && recipes.length > 0) {
    return mappedRecipes(recipes);
  }
  return [];
};
