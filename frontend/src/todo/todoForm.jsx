import React from 'react';
import Grid from '../template/grid';

export default props => (
    <div role='form' className="todoForm">
        <Grid cols='12 9 10'>
            <input id="desc" className="form-control" placeholder="adicione uma tarefa" />
        </Grid>

        <Grid cols='12 3 2'>
            <button className="btn btn-primary">
                <i className="fa fa-plus"></i>
            </button>
        </Grid>
    </div>
)