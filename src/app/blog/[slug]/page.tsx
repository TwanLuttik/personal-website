import { getPostData } from "../posts/posts";
import Date from "../../../components/Date";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  return {
    title: postData.title,
  };
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  return (
    <div className="">
      {/* Post Title */}
      <h1 className="mb-1 text-2xl font-extrabold">{postData.title}</h1>

      <div className="mb-5 text-sm font-normal italic text-gray-500">
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}
