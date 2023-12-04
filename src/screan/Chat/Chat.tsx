import React from "react";
import { ScrollView, View } from "react-native";
import Comment from "../../component/Comment/Comment";
export interface User {
  id: number;
  avatar: string;
  nickname: string;
}

export enum TypeComment {
  text = "text"
}

export interface CommentUser {
  type: "string" | "icon",
  value: string;
}

export interface Comment {
  id: number;
  type: TypeComment;
  user: User;
  comment: string;
  answerComment: undefined | number | null;
}

export interface Chat {
  id: number;
  comments: Comment[];
  owner: User;
}

function Chat() {
  const den: User = {
    id: 1,
    avatar: "",
    nickname: "Den"
  };

  const james: User = {
    id: 2,
    avatar: "",
    nickname: "James"
  };

  const comments: Comment[] = [
    {
      id: 1,
      type: TypeComment.text,
      user: den,
      comment: "u so cuteʕ•ᴥ•ʔ",
      answerComment: undefined
    }, {
      id: 2,
      type: TypeComment.text,
      user: james,
      comment: "u2 bracho xD",
      answerComment: 1
    }, {
      id: 3,
      type: TypeComment.text,
      user: den,
      comment: "(ᵔᴥᵔ)",
      answerComment: 2
    }
  ];

  return (
      <ScrollView style={{ paddingHorizontal: 8, display: "flex" }}>

        <View style={{ paddingVertical: "30%", display: "flex", gap: 10 }}>
          {comments.map((value, index) => (
              <Comment key={value.id} {...value}
                       commentAlien={value.user.id != den.id}
                       answerComment={value.answerComment ?
                           comments.find(value1 => value1.id == value.answerComment)
                           : undefined} />
          ))}
        </View>
      </ScrollView>
  );
}

export default Chat;
