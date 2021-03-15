import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Chatify",
  description: "Chat with people from around the world",
  keywords: "chat, chat application, chatify, lets chat, random, people",
};

export default Meta;
