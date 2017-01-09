use articles

db.articles.aggregate([{ 
	$lookup:{ 
		from:"authors", 
		localField: "author_id",
		foreignField: "_id", 
		as: "author" 
		}
	}
])