import React, { useState } from 'react';

import SearchComponent from '../components/Search';

function Search() {
  const [search, setSearch] = useState();

  const onSearch = (e) => {
    e.preventDefault();

    const { target } = e;

    // eslint-disable-next-line
    console.log({ target });
  };

  return (
    <SearchComponent
      search={search}
      setSearch={setSearch}
      onSubmit={onSearch}
    />
  );
}

export default Search;
