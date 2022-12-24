import {toDoActions} from "./type";

/**
 * initialState  defaul  hastatun anun eqn  hatrarum  vor@  irenic nerkayacnum  tvyal reduseri pahest@
 * aystex pahvum en tvyal reduseri hamar anhrajesht  bolor  tvyalnern  popoxakannern voronq petq e kirarveen ays redueri mej,
 *
 * **/


const initialState = {
  toDoList: [],
  userData: {
    fistName: '',
    lastName: '',
    address: {
      city: '',
      country: '',
      location: {
        lat: '',
        lng: ''
      },
    }
  }
}
// https://www.google.com/maps/@40.1821542,44.5142989,17.78z
/**
 * action => {type:'', payload:''}
 *
 * **/


/**
 * reduernern dranq  irencic nerkayacnum en  mi gaxapar@ aystes ayd gaxapar@ kirarvum ei funkciai  tesqov
 * inrenic nerkayacnu me hasarak funkcia  vor@ argumentovstanum e 2  parametr
 * 1 parametr@ handisanum e tvyal redueri state@  vor@  default  haytararum eqn  mer initial state@
 * vorpiszi  mer reduser  funkcian texyak lini te  vor stayti  het petq e ashxati  ev inchpisi  tvyalneri  het e  katarelu popoxutyunner@
 * 2 parametr@ irenic nerkayacnum e action
 * @action  irenic nerkayacnum e mi object  vor@ uni hetevyal parametrnern
 * @action => {type:'', payload:''}
 * @key i mijocov  menq  haytararum eqn  inch vor  popoxakanner@  vor@  reduern lselov  katarum e  hamapatasxan casi  gorcoxutyunn
 * isk caser@ kazmakerpum eqn switch => case gaxapari mijocov
 * stugum katarelov te  inch  type@  poxancel  ev ayd taypin hamapatasxan katarum e voroshaki gorcoxutyunner  tarmacnelov  tvyal redueri hamar naxatesvac stayt@
 *
 * isy@  typ@  meqn poxancum eqn reduxi  koxmic stexcvac  dispatch methodi  mijocov
 *
 * @payload  da handisanu me  ayn  arje@  vor@  dispatvheri mijocov  poxancum eqn  tvyal reduser vor karoxana  tarmacni inital staytum pahvac arjeqnern
 * @payload  karox e linel cankacac tesaki arjeqner sksac stringneric minchev  objectner
 *
 *
 * @reduernern - ihamar nexatesvac  funkcian integrelu hamar ogtagorcum enq switch => case  stugum katarelov  action.type@
 * vorix kaxvbabc popoxum eqn mer stayt@
 * anpayman  petq e nsheel  mer switch => case - hamar default  parametr@ vor ankax amen inchic  veradardzni  nor state
 *   default: {
 *       return {...state}
 *     }
 *
 * @reduernern  funkcian sarqeluc heto ayn  export eqn anum vor karoxananq integrel  combineReducers()  methodi  mej
 *
 * **/
const TodoListReducer = (state = initialState, action) => {
  console.log(action)
  //
  switch (action.type) {
    case toDoActions.CREATE_TO_DO: {
      return {...state, toDoList: [...state.toDoList, action.payload]}
    }
    case 'REMOVE_LIST': {
      console.log(action, 'action')
      return {...state, toDoList: state.toDoList.filter((item, i) => i !== action.payload)}
    }
    case toDoActions.CHANGE_LOCATION: {
      // payload = {lat:'40.1821542', lng:'44.5142989'}

      return {
        ...state,
        userData: {
          ...state.userData,
          address: {...state.userData.address, location: action.payload}
        }
      }
    }
    default: {
      return {...state}
    }
  }
  //

}

export default TodoListReducer

/**
 * ays  funckian irenic nerkayacnum e redxu  actionnern kazmakerpelu tarberakneric mek@
 * vor@ argumentic ka rox e stanal cankaca informaca kaxvac  xndri iravichakic
 * ev katarel  hamapatasx  typi  gorcixutyunn  ays  finckai nkanchu meqn dispatchi jamanak
 *
 * **/
export const removeList = (index) => {
  return {type: toDoActions.REMOVE_LIST, payload: index}
}
