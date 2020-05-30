import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchResultsWrapper } from './styles';
import List from '../../components/List';
import EpisodeListItem from '../../components/EpisodeListItem';
import { transformQueryParamsToObject } from '../../utils/functional';
import { searchFromText } from '../../store/modules/search/actions';
import { H1 } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';

function SearchResults() {
  const dispatch = useDispatch();

  const queryParams = transformQueryParamsToObject(window.location.search);

  useEffect(() => {
    dispatch(searchFromText(queryParams.q));
  }, [window.location.search]);

  const results = useSelector((state) => state.search.items);

  console.log(queryParams);
  console.log(results);

  return (
    <SearchResultsWrapper>
      <H1 color={COLORS.CLEAR_100} mb="48px">
        Resultados para sua busca por {`'${decodeURIComponent(queryParams.q)}'`}
      </H1>
      <List>
        {results.map((item) => (
          <EpisodeListItem {...item} />
        ))}
      </List>
    </SearchResultsWrapper>
  );
}

export default SearchResults;
