import React from "react";

function App18(props) {
  return (
    <div>
      <Comp
        product={{ name: "pizza", price: 3000 }}
        title="소년이온다"
        content="518"
        author="한강"
      />
    </div>
  );
}

function Comp({ product, title, content, author }) {
  return (
    <div>
      <h3>상품명 : {product.name}</h3>
      <h3>가격 : {product.price}</h3>
      <h3>책 제목 : {title}</h3>
      <h3>내용 : {content}</h3>
      <h3>작가 : {author}</h3>
    </div>
  );
}

export default App18;
