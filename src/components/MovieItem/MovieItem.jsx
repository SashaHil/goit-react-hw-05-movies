export const MovieItem = ({ product }) => {
  const { title, genres, overview, poster_path, vote_average } = product;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>Use Score: {vote_average}</p>
      <b>Overview: {overview}</b>
      <b>Genres:</b>
      {genres.map(({ name }) => <p>{name}</p>).join(',')}
    </div>
  );
};
