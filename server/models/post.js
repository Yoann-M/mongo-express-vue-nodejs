module.exports = {
    createCollection(db) {
        db.createCollection("posts", {
            validator: {
                $or: [{
                        title: {
                            $type: "string"
                        }
                    },
                    {
                        description: {
                            $type: "string"
                        }
                    }
                ]
            }
        })
    },
    getAll(db){
        db.collection('posts').find().toArray(function (err, results) {
            return results
        })
    }
}