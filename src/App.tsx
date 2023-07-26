// import Layout from 'components/Layout';
// import Home from 'pages/Home';
// import Post from 'pages/Post';
// import GlobalStyle from 'styles/GlobalStyle';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { LoadingContext } from 'contexts/state';
// import { useState } from 'react';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <>
//       <GlobalStyle />
//       <BrowserRouter>
//         <Layout>
//           <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/post/:id" element={<Post />} />
//               <Route path="*" element={<Home />} />
//             </Routes>
//           </LoadingContext.Provider>
//         </Layout>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
