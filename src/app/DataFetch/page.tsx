import Head from "next/head";

interface MyPageProps {
  data: any; // Define the type of your data
}

export const getStaticProps = async () => {
  // Fetch data from an API or any other source
  const data = await fetch("https://api.example.com/data").then((res) =>
    res.json()
  );

  // Return the data as props
  return {
    props: {
      data,
    },
  };
};

const MyPage = ({ data }: MyPageProps) => {
  // Use the data in your component
  return (
    <div style={{ margin: "5px 20px" }}>
      <Head>
        <title>getStaticProps</title>
      </Head>
      <h1>getStaticProps</h1>
    </div>
  );
};

export default MyPage;
