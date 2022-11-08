import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { PageLayout } from "../components/PageLayout";
import dayjs from "dayjs";

const getServerSideProps = (context: any) => {
  return { build_time: dayjs().format("YYYY-MM-DD, HH:mm:ss") };
};

export default function Home({ build_time }) {
  const goTo = (s: string) => {
    window.location.assign(s);
  };
  return (
    <HomeBody>
      <Head>
        <script
          defer
          data-domain="twanluttik.com"
          src="https://plausible.io/js/script.js"
        ></script>

        <title>Twan Luttik</title>
        <meta name="description" content="Personal website of twan luttik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <Image
          src={"/me.png"}
          alt={"profile_picture"}
          width={120}
          height={120}
          style={{ borderRadius: 12, marginTop: 10 }}
        />
        <p style={{ fontSize: 30, fontWeight: "bold", marginTop: 10 }}>
          Twan Luttik - Software Engineer
        </p>
        <div style={{ marginTop: 30 }}>
          <HeadingTitle>🔗 My links</HeadingTitle>
          <LinkBox onClick={() => goTo("https://linkedin.com/in/twanluttik")}>
            https://linkedin.com/in/twanluttik
          </LinkBox>
          <LinkBox onClick={() => goTo("https://github.com/twanluttik")}>
            https://github.com/twanluttik
          </LinkBox>
          <LinkBox onClick={() => goTo("https://twitter.com/twanluttik")}>
            https://twitter.com/twanluttik
          </LinkBox>
        </div>

        <div style={{ marginTop: 50 }}>
          <HeadingTitle>📝 My Skills</HeadingTitle>
          <TagText color="#9f760e">Javascript/Typescript/NodeJs</TagText>
          <TagText color="#4e6ddb">React/React-Native (+Typescript)</TagText>
          <TagText color="#3a9187">Postgres/SQL Query</TagText>
          <TagText color="#50913a">GCP/AWS</TagText>
          <TagText color="#703a91">Graphql</TagText>
        </div>

        <div style={{ marginTop: 50 }}>
          <HeadingTitle>📦 My Projects</HeadingTitle>
          <LinkBox onClick={() => goTo("https://streambk.com")}>
            https://streambk.com
          </LinkBox>
          <ProjectDescription style={{ maxWidth: 300 }}>
            A place where you upload any type of audio and put notes between the
            timeline to review your audio and collaborate with team .
          </ProjectDescription>

          <LinkBox onClick={() => goTo("https://yourstatus.app")}>
            https://yourstatus.app
          </LinkBox>
          <ProjectDescription style={{ maxWidth: 300 }}>
            This is a social media concept with having a status as MVP. (Not
            really active working on it due to time)
          </ProjectDescription>

          <LinkBox
            onClick={() =>
              goTo("https://www.npmjs.com/package/simple-core-state")
            }
          >
            Simple-Core-State
          </LinkBox>
          <ProjectDescription style={{ maxWidth: 300 }}>
            Created a simple core state library for react.
          </ProjectDescription>
        </div>

        <p
          style={{
            color: "#a8a8a8",
            fontStyle: "italic",
            marginTop: 200,
            paddingBottom: 10,
          }}
        >
          Build at: {build_time}
        </p>
      </PageLayout>
    </HomeBody>
  );
}

const HomeBody = styled.div`
  height: 100%;
  color: #383838;
`;

const LinkBox = styled.div`
  cursor: pointer;
  margin-bottom: 3px;
  padding: 3px 6px;
  border-radius: 3px;
  width: fit-content;
  user-select: none;
  margin-left: -5px;

  :hover {
    /* text-decoration: underline; */
    background-color: #efefef;
    color: #969696;
  }
  :active {
    background-color: #4d4d4d;
    color: #ffffff;
  }

  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
`;

const HeadingTitle = styled.div`
  font-weight: 500;
  margin-bottom: 9px;
  font-size: 18px;
  text-decoration: underline;
`;

const ProjectDescription = styled.div`
  font-size: 14px;
  color: #6d6d6d;
  margin-bottom: 40px;
`;

const TagText = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border: solid 2px #ffffff80;
  padding: 6px 12px;
  border-radius: 50px;
  color: white;
  width: fit-content;
  margin-bottom: 4px;
  user-select: none;
  cursor: default;
`;
