import { posts } from "../data/postsData";

function index(request, response) {
    response.json(posts)
};

function show(request, response) {
    const { id } = request.params;

    const realId = Number(id.trim());

    if (isNaN(realId)) {
        response.status(404)
            .json({
                errore: '"id" non corretto',
                risultato: null
            });
        return;
    }

    if (realId <= 0) {
        response.status(404)
            .json({
                errore: '"id" non corretto è minore di 0',
                risultato: null
            });
        return;
    }

    const postFound = posts.find(post => {
        return post.id === realId;
    });

    response.json({
        errore: null,
        risultato: postFound
    });
}

export {
    index,
    show,
}