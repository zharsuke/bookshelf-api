const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            return 'Homepage';
        }
    },
    {
        method : 'POST',
        path : '/books',
        handler : (request, h) => {
            
        }
    },
]

module.exports = routes;