import React from 'react';

import EpisodeList from './Podcast/EpisodeList';
import { useSearchResults } from '../store/modules/search/selector';

function SearchResults() {
  const searchResults = useSearchResults();

  return (
    <>
      {searchResults &&
        searchResults.map(({ episodes, name }) => (
          <EpisodeList
            height="fit-content"
            noLabel
            episodes={episodes}
            podcast={name}
          />
        ))}
    </>
  );
}

export default SearchResults;
