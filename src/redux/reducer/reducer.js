// 초기값을 항상만들어주기 위해서 셋팅
let initialState = {
  count: 0,
  id: "",
  password: ""
}

// reducer을 사용할때는 함수형으로 만들고 매개변수로 state, action을 가지고간다.
function reducer(state=initialState, action){
  // app.js에서 dispatch로 던져준 action을 여기서 받을 수 있다.
  console.log(action);
  // ...state = state값을 유지를 하고 count만 바꾼다 / ...을 쓴 이유는 initialState안에 여러가직 값들이 섞여있을 수 있기 때문에
  // count: state에 있는 count에 +1을 한 값을 count라는 key에 넣고 return을 시켜준다.
  // 새로운 객체를 전달받아야 store가 본인이 바뀐걸 알게된다.
  // spread 문법을 통하여 기존 객체내용을 복사해 새로운 객체에 전달 가능
  //  ...state는 고정으로 넣어줘야 한다.
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.payload.num};
    case 'LOGIN':
      return {...state, id: action.payload.id, password: action.payload.password };
    case 'DECREMENT':
      return{...state, count: state.count - action.payload.num1}
    default:
      return { ...state};
  }

  return {...state};
}

export default reducer