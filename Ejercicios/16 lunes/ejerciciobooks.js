const user = {
  name: "Gemma",
  userId: 27,
};

const book1 = {
  title: "Titulo1",
  author: "Author1",
  description: "Description1",
  isbn: "Isbn1",
};
const book2 = {
  title: "Titulo2",
  author: "Author2",
  description: "Description2",
  isbn: "Isbn2",
};
const book3 = {
  title: "Titulo3",
  author: "Author3",
  description: "Description3",
  isbn: "Isbn3",
};

user.books = [book1, book2];

const library = [user];

console.log (user);

library.user.book3;




