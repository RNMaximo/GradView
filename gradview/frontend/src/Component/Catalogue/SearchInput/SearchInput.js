import React from 'react';
import {DebounceInput} from 'react-debounce-input';

import './SearchInput.css';

class SearchInput extends React.Component {

  render() {
    return (
      <div>
        <DebounceInput
          className={"SearchInput"}
          minLength={1}
          debounceTimeout={200}
          onChange={(event) => this.props.onChangeHandler(event)}
          placeholder={"Buscar disciplina"}
        />
      </div>
    )
  }
}
export default SearchInput;