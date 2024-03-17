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

export const getAllApprovedArticles = (page, size, order) => {
  if (!page) {
    page = 0;
  }
  if (!size) {
    size = 10;
  }
  if (!order) {
    order = "id";
  }

  return fetch(
    "http://localhost:3035/posts/all?page=" +
      page +
      "&size=" +
      size +
      "&order=" +
      order
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error in fetching posts");
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
