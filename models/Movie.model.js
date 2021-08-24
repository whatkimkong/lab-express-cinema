  // title, director, stars (array of strings), image URL, description string, showtimes array of times

  const { Schema, model } = require("mongoose");

  const movieSchema = new Schema(
      {
          title: {
            type: String,
          },
          director: String,
          stars: [{
            type: String,
          }],
          image: String,
          description: String,
          showtimes: [{
            type: String,
          }],
      }
  );

  module.exports = model("Movie", movieSchema);
