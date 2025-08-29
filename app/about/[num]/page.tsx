interface HomePageProps {
  params: Promise<{
    num: string;
  }>;
}

async function Home({ params }: HomePageProps) {
  // `params.num` can be accessed directly as it's not a Promise.
  const { num } = await params;
  return (
    <div>
      <h1>about 경로 테스트</h1>
      <p>현재 경로의 파라미터: {num}</p>
    </div>
  );
}

export default Home;
