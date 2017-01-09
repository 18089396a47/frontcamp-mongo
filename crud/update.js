use articles

db.authors.updateOne({
    name: 'Keith Curtin'
}, { $set: {
    name: 'Kate Curtin'
}})