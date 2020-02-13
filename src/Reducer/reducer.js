import bau from "./../Image/bau.png"
import ca from "./../Image/ca.png";
import cua from "./../Image/cua.png";
import ga from "./../Image/ga.jpg";
import nai from "./../Image/nai.png";
import tom from "./../Image/tom.png";
import { createStore } from 'redux';
const myState = {
    list: [{ id: 1, src: bau },
    { id: 2, src: cua },
    { id: 3, src: tom },
    { id: 4, src: ca },
    { id: 5, src: nai },
    { id: 6, src: ga }],
    listCuoc: [{ id: 1, tienCuoc: 0 },
    { id: 2, tienCuoc: 0 },
    { id: 3, tienCuoc: 0 },
    { id: 4, tienCuoc: 0 },
    { id: 5, tienCuoc: 0 },
    { id: 6, tienCuoc: 0 }],
    tien: 100,
    urlHinh: {
        1: bau,
        2: cua,
        3: tom,
        4: ca,
        5: nai,
        6: ga
    },
    listRandom: { 1: 3 },
    random3Con: [],
    listPlay: []
}

function reducer(state = myState, action) {
    console.log(action)
    switch (action.type) {
        case "SET_LIST_RANDOM":
            console.log(action.payload)
            return {
                ...state,
                listRandom: action.payload
            }
        case "TINH_TIEN":
            return {
                ...state,
                tien: state.tien + action.payload
            }
        case "RESET":
            return {
                ...state,
                listCuoc: action.payload
            }
        case "DAT_CUOC":
            return {
                ...state,
                listCuoc: action.payload.listCuoc,
                tien: action.payload.tien
            }
        case "TEN_KHONG_CHUOI":
            const { listPlay } = state;
            listPlay.push(action.payload)
            return {
                ...state,
                listPlay: [...listPlay]
            }
    }
    return state;
}

export const store = createStore(reducer)

