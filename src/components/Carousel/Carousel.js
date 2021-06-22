import './carousel.css'
import CATEGORIES from './../../images/categories.svg'
import TV from './../../images/tv-monitor.svg'
export const Carousel = () => {
  return (
    <>
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center',width: 215 }}>
        <img src={CATEGORIES} style={{width: 50, height: 50}}/>
        <p style={{marginLeft: 10,fontSize: 21,fontFamily: 'Bebas Neue',}}>Choose your category</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 20, backgroundColor: '#F1F3F6', padding: 16, borderRadius:9,marginTop: 13}}>
        <div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div>
        <div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div><div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div><div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div><div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div><div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div><div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div><div className="poster_boxes">
          <img src={TV} style={{width: 90, heigth: 90}}/>
          <p className="poster_title" style={{margin: 0, padding: 0}}>Technic</p>
        </div>
      </div>
    </>
  );
};
