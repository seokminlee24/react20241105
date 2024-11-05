function MyComp() {
  return (
    <div>
      <h1>첫번째 컴포넌트(장실 감 큰거임)</h1>
    </div>
  );
}

function App2() {
  /*
    <div>
      <h1>첫번째 컴포넌트</h1>
      <h1>첫번째 컴포넌트</h1>
    </div>
     */
  return (
    <div>
      <MyComp />
      <MyComp />
    </div>
  );
}
export default App2;
