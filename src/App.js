import style from './app.module.scss';
import Box from './components/Box';

function App() {
  return (
    <div className={style.app}>
      <Box customClassName={style.customBox1} />
      <Box customClassName={style.customBox2} />
    </div>
  );
}

export default App;
