import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SearchComponent from '../components/Search';
import * as SearchActions from '../store/modules/search/actions';
import history from '../services/history';
import { transformQueryParamsToObject } from '../utils/functional';

function Search() {
  const dispatch = useDispatch();
  const queryParams = transformQueryParamsToObject(window.location.search);
  const [search, setSearch] = useState(queryParams.q || '');

  useEffect(() => {
    if (search !== '' && search.trim().length > 2) {
      dispatch(SearchActions.searchFromText(queryParams.q));
    }
  }, [search]);

  const onSearch = (text) => {
    setSearch(text);

    if (text.trim().length > 2) {
      dispatch(SearchActions.setSearching(true));
      history.push(`/?q=${text}`);
    } else if (text.length === 0) {
      dispatch(SearchActions.setSearching(false));
      history.push('/');
    }
  };

  return (
    <SearchComponent
      search={search}
      setSearch={setSearch}
      onSearch={onSearch}
    />
  );
}

export default Search;
