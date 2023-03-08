import React, { useState } from 'react';

const App: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeBtn = () => {
    setLiked(!liked);
  };

  if (liked) {
    return <button onClick={handleLikeBtn}>UnLike</button>;
  } else {
    return <button onClick={handleLikeBtn}>Like</button>;
  }
};

export default App;
