import {useContext} from "react";

import {GlobalCotext} from '../App'



export const withGlobalState = Component => (props) => {
  const {state} = useContext(GlobalCotext)


    return <Component {...{...props, state}}/>
}
