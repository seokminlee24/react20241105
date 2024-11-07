import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h3>chakra ui 테이블</h3>
      <Table.Root variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>읽기</Table.ColumnHeader>
            <Table.ColumnHeader>날짜</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>3030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <hr />
      <h3>기본 테이블</h3>
      <table>
        <thead>
          {/*tr>th*5>lorem1*/}
          <tr>
            <th>Lorem.</th>
            <th>Inventore.</th>
            <th>Ipsam.</th>
            <th>Molestias?</th>
            <th>Soluta?</th>
          </tr>
        </thead>
        <tbody>
          {/*tr*5>td*5>lorem1*/}
          <tr>
            <td>Lorem.</td>
            <td>Quos!</td>
            <td>Expedita!</td>
            <td>Alias?</td>
            <td>Tempora.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Rem.</td>
            <td>Ipsam?</td>
            <td>Dolore!</td>
            <td>Omnis.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Itaque!</td>
            <td>Vel.</td>
            <td>Deserunt!</td>
            <td>Consequatur.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Voluptatibus!</td>
            <td>Nemo!</td>
            <td>Enim.</td>
            <td>Natus.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Consectetur.</td>
            <td>Odio!</td>
            <td>Ad!</td>
            <td>Deleniti.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyApp27;
