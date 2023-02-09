const {addBookHandler, getAllBookHandler, getBookByIdHandler, updateBooksByIdHandler, deleteBooksById} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBooksByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksById,
    },
];


module.exports = routes;