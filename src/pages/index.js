import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="This is pc builder site  made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pc.png" sizes="any" />
      </Head>

      
      <p>Hello world!</p>
    </div>
  );
}
