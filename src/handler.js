const { nanoid } = require("nanoid");
const books = require("./books");

const addBookHandler = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    const id = nanoid(16);
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, reading, id, finished, insertedAt, updatedAt,
    };
    books.push(newBook);
    if (name === null) {
        const response = h.response({
            status : "fail",
            message : "Gagal menambahkan buku. Mohon isi nama buku",
        });
    }
};

module.exports = { addBookHandler };