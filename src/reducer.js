function reducer(state = { basefare: "200", GST: null, total: null }, action) {
    console.log(action);
    var allFares = { ...state };
    if (action.type === 'BSFVALUE') {
        allFares.basefare = Number(action.data);
        allFares.GST = allFares.basefare * 5 / 100;
        allFares.total = allFares.basefare + allFares.GST;
        return allFares;
    }

    else {
        return state;
    }
}


export default reducer;