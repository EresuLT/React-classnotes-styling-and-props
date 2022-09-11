//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//? Dahili bir resim eklemek için import yapmak gereklidir
import img2 from './img/magnolia.jpg';
//? Harici stillendirme dosyası
import './Content.css';

const Content = () => {
  //* const deneme = {x:1}; => JS
const imgStyle={
  display: 'block',
  width: "300px",
  margin: "1rem auto"
}
  return (
    <div className='content'>
      {/* Inline Style => JSXte bu şekilde yorumlanır */} 
      <h2 style={{color:'red'}}>React JS</h2>
      <p style={{backgroundColor: 'lightgreen'}}>React, kullanıcı arabirimi tasarlamak için kullanılan bir JS kütüphanesidir.</p>
      <img style={imgStyle} src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="" />
      <img style={imgStyle} src={img2} alt="img2" />

      <p className='par-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia inventore commodi, laboriosam vero non alias architecto, corporis, nulla deleniti culpa totam dignissimos voluptatem neque fuga sint nam et itaque natus doloribus quae velit temporibus. Consequatur numquam cum similique consectetur optio?</p>
    </div>
  )
}

export default Content;