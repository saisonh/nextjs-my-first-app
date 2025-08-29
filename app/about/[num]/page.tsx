function Home({ params }: { params: { num: string } }) {
  return (
    <div>
      <h1>about 경로 테스트</h1>
      <p>현재 경로의 파라미터: {params.num}</p>
    </div>
  );
}

export default Home;
