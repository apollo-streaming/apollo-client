import React from 'react';
import { useSelector } from 'react-redux';

import { SearchResultsWrapper } from './styles';
import List from '../../components/List';
import EpisodeListItem from '../../components/EpisodeListItem';

function SearchResults() {
  const results = useSelector((state) => state.search.items);

  return (
    <SearchResultsWrapper>
      <List>
        {results.map((item) => (
          <EpisodeListItem {...item} />
        ))}
      </List>
    </SearchResultsWrapper>
  );
}

export default SearchResults;
