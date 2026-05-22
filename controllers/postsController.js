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
            messaggio: '"id" non corretto',
            risultato: null
        });
        return;
    }
}