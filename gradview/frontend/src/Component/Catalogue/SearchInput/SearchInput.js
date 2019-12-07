import React from 'react';
import {DebounceInput} from 'react-debounce-input';

import './SearchInput.css';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';


class SearchInput extends React.Component {

  render() {
    const canBeCleared = this.props.value.length > 0;
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
        {canBeCleared ?
          <div title="Limpar">
            <IconButton
              className={"clear white-button"}
              tittle={"Limpar busca"}
              variant="contained"
              color="default"
              onClick={this.props.clear}
            >
              <ClearIcon/>
            </IconButton>
          </div>
          : null}
      </div>
    );
  }
}
export default SearchInput;