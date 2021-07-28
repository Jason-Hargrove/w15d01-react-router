function App() {
  const name = 'Jason'
  const x = false
  const a = 2
  
  return (
    <div className='container'>
      <h1>Hello From React</h1>
      <h2>Hi {name}</h2>
      <h2>{x ? 'x is ture' : 'x is false'}</h2>
      <h2>{1 + 1}</h2>
    </div>
  );
}

export default App;
