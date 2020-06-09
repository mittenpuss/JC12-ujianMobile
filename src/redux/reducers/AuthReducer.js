

const INITIAL_STATE = { 
    username:null,
    isLogin: false,
    defaultpic:'https://www.pngitem.com/pimgs/m/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png'
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return { ...state, isLogin:true, username:action.payload }
        case 'USER_LOGOUT':
           return { ...state, isLogin:false, username:null }
        case 'DEFAULT_PIC':
           return { ...state, defaultpic:action.payload }
           
        default:
            return state
    }
}