import React from 'react';
import {DebounceInput} from 'react-debounce-input';

import './SearchInput.css';

class SearchInput extends React.Component {

  render() {
    return (
      <DebounceInput
        className={"SearchInput"}
        minLength={1}
        debounceTimeout={50}
        onChange={(event) => this.props.onChangeHandler(event)}
        placeholder={"Buscar disciplina por código, nome ou ementa"}
      />
    )
  }
}
export default SearchInput;