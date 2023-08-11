import Gallery from './components/Gallery';
import Info from './components/Info';
import './App.css';

function App() {
  const info = Info.map((info,index) => {
    return(
      <Gallery
      key={index}
      img = {info.image}
      title = {info.title}
      caption = {info.caption}
    />
    )
  })
  return (
    <div className="App">
      <h1>Logo</h1>
      <div className='App--gallery'>
        <h1 className='JL-Photographs'>JL Photographs<br/>
        -----------------------<br/>
        The Next Legendary Photographer</h1>
        {info}
      </div>
    </div>
  );
}

export default App;
