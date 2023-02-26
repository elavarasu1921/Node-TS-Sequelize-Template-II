import Actor from "./actor";
import ActorMovies from "./actor-movies";
import Address from "./address";
import Movie from "./movie";

// Movie - Actor
Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });

// Address - Actor
Address.belongsTo(Actor);
Actor.hasOne(Address);
