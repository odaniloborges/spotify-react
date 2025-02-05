import React, { useState, useEffect } from 'react';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(true);

  // Função para buscar os dados da API
  const requestApi = async (term) => {
    const url = `http://localhost:3000/artists?name_like=${term}`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data);
  };

  // Efeito para chamar a API quando o termo de busca muda
  useEffect(() => {
    if (searchTerm === '') {
      setShowPlaylist(true);
      setResults([]);
      return;
    }
    requestApi(searchTerm);
    setShowPlaylist(false);
  }, [searchTerm]);

  return (
    <div>
      {/* Input de busca */}
      <input
        id="search-input"
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />

      {/* Resultados da playlist (condicional) */}
      {showPlaylist && (
        <div id="result-playlists">
          <h2>Playlists</h2>
          {/* Adicione aqui o conteúdo das playlists */}
        </div>
      )}

      {/* Resultados do artista (condicional) */}
      {results.length > 0 && (
        <div id="result-artist">
          {results.map((artist) => (
            <div key={artist.id}>
              <h2 id="artist-name">{artist.name}</h2>
              <img id="artist-img" src={artist.urlImg} alt={artist.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;