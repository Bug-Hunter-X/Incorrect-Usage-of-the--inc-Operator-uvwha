```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("650e4a6d680570468a520662")}, {"$inc": {"counter": 1}});
```