import logo from './logo.svg';
import './App.css';
import Post from './components/organisms/Post';

function App() {
  const postList = [
    {
      imageSource: "https://images.unsplash.com/photo-1695642579093-2a646b3e89e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      comments: [
        {username: "@johndoe", comment: "Nice picture 🚀"},
        {username: "@janedoe", comment: "Awesome picture 🚀"},
      ]
    },
    {
      imageSource: "https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=500&q=80",
      comments: [
        {username: "@markz", comment: "Nice picture 🚀"},
        {username: "@elonm", comment: "Awesome picture 🚀"},
      ]
    }
  ]
  return (
    <div>
      <h1>Fakestagram</h1>
      {postList.map((post, index) => {
        return <Post 
          key={index}
          src={post.imageSource}
          comments={post.comments}
        />
      })}
    </div>
  );
}

export default App;
