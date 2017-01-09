use grades

db.grade.mapReduce(function() {
    var nonQuizScores = this.scores.filter(function(scoreItem) {
        return scoreItem.type !== 'quiz';
    });

    var sum = nonQuizScores.reduce(function(currentSum, scoreItem) {
        return currentSum + scoreItem.score;
    }, 0);

    var average = sum / nonQuizScores.length;

    emit(this.class_id, average);
}, function(key, values) {
    var sum = values.reduce(function(currentSum, item) {
        return currentSum + item;
    }, 0);

    var average = sum / values.length;

    return {
        class_id: key,
        average: average
    };
}, {
    out: '{inline: 1}'
}).find().sort({'value.average': -1}).limit(3)