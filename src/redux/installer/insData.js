import { createSlice } from "@reduxjs/toolkit";

let insData = createSlice({
    name : 'installSequence',
    initialState : {
        orbTitle: ""
    },
    reducers : {
        changeTitle(state, name) {
            state.orbTitle = name.payload;
        }
    }
});

export default insData

export let { changeTitle, changeUrl, changeDatabase, changePassword, changeSet } = insData.actions