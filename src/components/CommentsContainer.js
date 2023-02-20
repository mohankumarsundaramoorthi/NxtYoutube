import React from "react";

const commentsData = [
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Taj",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Taj",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Taj",
            text: "Lorem ipsum dolor sit amet",
            replies: [],
          },
          {
            name: "Taj",
            text: "Lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Taj",
        text: "Lorem ipsum dolor sit amet",
        replies: [],
      },
      {
        name: "Taj",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Taj",
            text: "Lorem ipsum dolor sit amet",
            replies: [],
          },
          {
            name: "Taj",
            text: "Lorem ipsum dolor sit amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Taj",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img alt="usericon" src="/assets/user-icon.png" className="h-12"></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
