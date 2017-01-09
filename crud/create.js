use articles

db.counters.insertOne({
    _id: 'author_id',
    seq: 0
});

function getNextSequence(name) {
    var ret = db.counters.findAndModify({
        query: { _id: name },
        update: { $inc: { seq: 1 } },
        new: true
    });

   return ret.seq;
}

db.authors.insertOne({
    _id: getNextSequence('author_id'),
    name: 'Keith Curtin'
});

db.articles.insertOne({
    author_id: 1,
    title: 'Mixed Reality will be most important tech of 2017',
    description: '2016 has been a remarkable year that’s brought continued growth and awareness to the worlds of Augmented, Virtual and Mixed Reality. Set to become a $165 Billion dollar industry by 2020, there’s still a common question that lingers among many newcomers trying to understand this fast moving digital phenomena we are just beginning to watch evolve: What’s …',
    url: 'http://thenextweb.com/insider/2017/01/07/mixed-reality-will-be-most-important-tech-of-2017/',
    urlToImage: 'https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/mr8.jpg',
    publishedAt: '2017-01-07T20:32:46Z'
});