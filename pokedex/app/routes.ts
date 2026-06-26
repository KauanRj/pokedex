import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("types", "routes/type.tsx"),
    route("pokemons", "routes/pokemon.tsx"),

] satisfies RouteConfig;
