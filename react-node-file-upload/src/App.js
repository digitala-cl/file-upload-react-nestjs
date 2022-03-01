// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilesUploadComponent from './components/files-upload-component';
function App() {
  return (
    <div className="App">
      <h2>React File Upload Demo</h2>
      <FilesUploadComponent />
    </div>
  );
}
export default App;