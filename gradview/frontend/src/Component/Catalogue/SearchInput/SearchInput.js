import React from 'react';
import {DebounceInput} from 'react-debounce-input';

import './SearchInput.css';

class SearchInput extends React.Component {

  render() {
    return (
      <div className={"search"}>
        <DebounceInput
          value={this.props.value}
          className={"search-input"}
          minLength={1}
          debounceTimeout={50}
          onChange={(event) => this.props.onChangeHandler(event)}
          placeholder={"Buscar disciplina por código, nome ou ementa"}
        />
        <button className={"clear"} tittle={"Limpar busca"} onClick={this.props.clear}>
          <strong>x</strong>
        </button>
      </div>
    )
  }
}
export default SearchInput;