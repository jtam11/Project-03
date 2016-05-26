var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TalkSchema = new Schema ({
  title: String,
  date: Date,
  location: String,
  topics: [ String ],
  description: String,
  image: String,
  availableSpots: Number,
  lead: String,
  attendees: [ String ]
});

var Talk = mongoose.model('Talk', TalkSchema);

module.exports = Talk;
