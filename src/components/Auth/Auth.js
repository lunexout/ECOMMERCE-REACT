import React, {useState, useEffect} from 'react'
import KEY from '../../images/padlock.svg'
import EMAIL from '../../images/email.svg'
import CLOSE from '../../images/close.svg'

import './auth.css'

export const Auth = ({setAuth}) => {
    return (
        <>  
            <div style={{height: 300,width:300,
                zIndex: 99,
                padding: 5,borderRadius: 5,border: '0.5px solid #DEDED7',margin: '0 auto',marginTop: 80}}>
                <div onClick={() => setAuth(false)} style={{display: 'flex', justifyContent:'center',
                cursor: 'pointer', alignItems: 'center',marginBottom: 20,marginTop: 10}}>
                    <img style={{width: 30, height: 30}} src={CLOSE}/>
                </div>
                {/* <div style={{width: 240,margin: '0 auto',display:'flex', justifyContent: 'space-between',
                alignItems: 'center',flexWrap: 'wrap'
                }}>
                    <div className="defFont" style={{height: 50, 
                    justifyContent: 'center',display: 'flex',alignItems: 'center',flexDirection: 'column'}}>
                        Authorization
                        <div style={{width: 40, height: 2.5,marginRight: 30,marginTop: 2, backgroundColor: '#D52F2F'}}>
                        </div>
                    </div>
                    <div className="defFont">
                        OR
                    </div>
                    <div className="defFont" style={{height: 50,
                    justifyContent: 'center',display: 'flex',alignItems: 'center',flexDirection: 'column'}}>
                        Registration
                        <div style={{width: 40, height: 2.5,marginRight: 30,marginTop: 2, backgroundColor: '#D52F2F'}}>
                        </div>
                    </div>
                </div> */}
                <div style={{width: 275,margin: '0 auto',
                    display: 'flex', alignItems: 'center'
                }}>
                    <div style={{width: 100,height: 55,
                    display: 'flex',alignItems:'center',justifyContent: 'center',
                    border: '1px solid #DEDED7',
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    borderRight: 'none',
                    backgroundColor:'#F4F4F4'}}>
                    <img style={{width:16, height: 19,}} src={EMAIL}/>
                    </div>
                    <input type='email' placeholder='email@example.com' style={{width: '100%', padding: 20,
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 4,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        appearance:'none',
                         outline: 'none',
                         backgroundColor: '#F4F4F4', border: '1px solid #DEDED7'}}>

                    </input>
                </div>

                <div style={{width: 275,margin: '0 auto',marginTop: 10,height: 55,
                    display: 'flex', alignItems: 'center'
                }}>
                    <div style={{width: 100,height: '100%',
                    display: 'flex',alignItems:'center',justifyContent: 'center',
                    border: '1px solid #DEDED7',
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    borderRight: 'none',
                    backgroundColor:'#F4F4F4'}}>
                    <img style={{width:20, height: 19,}} src={KEY}/>
                    </div>
                    <input type="password" placeholder='password' style={{width: '100%', padding: 20,
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 4,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                         outline: 'none',
                         backgroundColor: '#F4F4F4', border: '1px solid #DEDED7'}}>

                    </input>
                </div>
                <div style={{width: 275, margin: '0 auto', fontSize: 11, fontWeight: 500, color: '#666665'}}>
                <p>
                    Forgot password?
                </p>
                </div>
                <div style={{width: 275, margin: '0 auto',display: 'flex', justifyContent: 'flex-end'}}>
                    <button className="auth__button">
                        Authorization
                    </button>
                </div>
            </div>
        </>
    )
}