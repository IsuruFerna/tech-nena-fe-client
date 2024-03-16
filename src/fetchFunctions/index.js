export const getAllCategories = () => {
  return fetch("http://localhost:3035/posts/categories")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error in fetching categories");
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
