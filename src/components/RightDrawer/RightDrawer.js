import React from 'react'
import './rightdrawer.css'
export const RightDrawer = ({setRightBurgerState, RightBurgerState}) => {
  let drawerClasses = 'right__drawer'
  if (RightBurgerState) {
    drawerClasses = 'right__drawer open'
  }
    return (
        <>
            <div className={drawerClasses} >
                <div>
                    Menu
                </div>
                <div>
                    <button onClick={() => setRightBurgerState(false)} className="close__right__burger__button">
                        X
                    </button>
                </div>
            </div>
        </>
    )
}