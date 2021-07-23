import React from 'react'
import KEY from '../../images/padlock.svg'
import EMAIL from '../../images/email.svg'
import CLOSE from '../../images/close.svg'

import './auth.css'

export const Auth = ({setAuth}) => {
    return (
        <>  
        <div className="card__background__container"></div>
            <div className="card__container">
            <div style={{height: "30rem",width:"30rem",
            maxWidth: "100%",
                zIndex: 99,
              
              borderRadius: "0.5rem", backgroundColor: "white",border: '0.5px solid #DEDED7',margin: '0 auto',display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: 'relative'}}>
                    {/* <div className="container__title__auth">LOGIN</div> */}
                <div onClick={() => setAuth(false)}>
                    <img className='close__button' src={CLOSE} width='28' onClick={() => { document.body.classList.remove("none__body__scroll"); }} alt='' />
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
                <div style={{width: "90%",margin: '0 auto',
                    display: 'flex', alignItems: 'center'
                }}>
                    <div style={{width: 100,height: 55,
                    display: 'flex',alignItems:'center',justifyContent: 'center',
                    border: '1px solid #DEDED7',
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    borderRight: 'none',
                    backgroundColor:'#F4F4F4'}}>
                    <img style={{width:16, height: 19,}} src={EMAIL} alt=''/>
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

                <div style={{width: "90%",margin: '0 auto',marginTop: 10,height: 55,
                    display: 'flex', alignItems: 'center'
                }}>
                    <div style={{width: 100,height: '100%',
                    display: 'flex',alignItems:'center',justifyContent: 'center',
                    border: '1px solid #DEDED7',
                    borderBottomLeftRadius: 4,
                    borderTopLeftRadius: 4,
                    borderRight: 'none',
                    backgroundColor:'#F4F4F4'}}>
                    <img style={{width:20, height: 19,}} src={KEY} alt=''/>
                    </div>
                    <input type="password" placeholder='Password' style={{width: '100%', padding: 20,
                        borderBottomRightRadius: 4,
                        borderTopRightRadius: 4,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                         outline: 'none',
                         backgroundColor: '#F4F4F4', border: '1px solid #DEDED7'}}>

                    </input>
                </div>
                <div style={{width: "90%", margin: '0 auto', fontSize: 11, cursor: "pointer",fontWeight: 500, color: '#666665'}}>
                <p>
                    Forgot password?
                </p>
                </div>
                <div style={{width: "90%", margin: '0 auto',display: 'flex', justifyContent: 'flex-end'}}>
                    <button className="auth__button">
                        Authorization
                    </button>
                </div>
            </div>
            </div>
        </>
    )
}