import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
    console.log('Reducer_action:', action);
    switch(action.type){
        case FETCH_WEATHER:
            //DO NOT USE state.push to manipulate the state, always make sure to return a new instance of state!!
            return state.concat([action.payload.data]);
            //return [action.payload.data, ...state];  //-- ES6 way of concat
    }
    return state;
}