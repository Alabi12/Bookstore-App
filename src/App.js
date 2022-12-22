const App = () => (
  <Provider store={store}>
    <Navigate />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Provider>
);

export default App;
