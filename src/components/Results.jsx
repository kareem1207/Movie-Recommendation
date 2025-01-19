export const Results = ({ data }) => {
    // Ensure we're using data.results for mapping
    const items = data?.results || [];
  
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {items.map((item) => (
          <div key={item.id} className="cursor-pointer sm:p-3 hover:text-amber-600">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.poster_path
              }`}
              alt={item.title || item.name}
              className="w-full h-auto"
            />
            <h2 className="truncate text-lg font-bold">
              {item.title || item.name}
            </h2>
            <p className="line-clamp-2 text-md">{item.overview}</p>
            <p className="flex items-center">
              {item.release_date || item.first_air_date}
              <span className="ml-2">⭐ {item.vote_average}</span>
            </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300">
                <a href={`movies/${item.title || item.name}`}>
                  More Info
                </a>
              </button>
          </div>
        ))} 
      </div>
    );
  };