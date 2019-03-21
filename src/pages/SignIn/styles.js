import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    margin: 10px 0 30px;
  }
  p {
    color: #fff;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    background-color: #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #000;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: all 0.2s
  }
  button:hover {
    background: #383838;
  }
`;