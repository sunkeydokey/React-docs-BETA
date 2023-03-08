import { useState } from 'react';
import './App.css';

const App = () => {
  const [liked, setLiked] = useState(false);

  const likeBtnHandler = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <p>He is</p>
      <button onClick={likeBtnHandler}>{liked ? 'Happy' : 'Sad'}</button>
      <p>{liked ? 'o(*￣▽￣*)o' : '.·´¯`(>▂<)´¯`·. '}</p>
    </div>
  );
};

export default App;
