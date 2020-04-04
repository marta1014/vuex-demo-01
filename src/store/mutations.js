export default {
  login (state, v) {
    console.log(v, state)
    state.userInfo = v
  },
  setMemberInfo (state, v) {
    state.userStatus = v.userStatus
    state.vipLevel = v.vipLevel
  }
}
