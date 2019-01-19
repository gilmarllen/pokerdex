var libs = {
    portal  : require('/lib/xp/portal'),
    content : require('/lib/xp/content')
};

exports.get = handleGet;

function handleGet(req) {
    var start = 0;
    var count = req.params.count || 10;
    var term = req.params.term || "";

    var players = libs.content.query({
        start: start,
        count: count,
        query: "_path LIKE '/content/pokerdex/players/*' AND ngram('_name', '"+term+"', 'AND')",
        sort: "_manualordervalue DESC",
        contentTypes: [
            app.name + ":player"
        ]
    }).hits.map(function(p){
        log.info(p._name);
        return {
            id: p._id,
            name: p.displayName,
            modifiedTime: p.modifiedTime,
            description: p.data.description || "",
        };
    });

    return {
        contentType: "application/json;charset=utf-8",
        body: players
    }
}