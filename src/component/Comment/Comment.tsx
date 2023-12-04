import React from "react";
import { Avatar, Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { Comment as CommentType, TypeComment, User } from "../../screan/Chat/Chat";
import { color } from "../../style/color";
import Icon from "react-native-vector-icons/FontAwesome6";

export interface CommentProps {
  id: number;
  type: TypeComment;
  user: User;
  comment: string;
  answerComment: undefined | CommentType;
  commentAlien: boolean;
}

function Comment({ commentAlien, comment, user, answerComment, type, id }: CommentProps) {
  return (<View
      style={[style.container, commentAlien ? style.commentLeftSelf : style.commentRightSelfReverse]}>
      <Avatar.Text label={user.nickname[0]} style={{ alignSelf: "flex-end" }} />
      <View style={style.insideContainer}>
        {
          answerComment ?
            <View style={style.answerContainer}>
              <View style={[style.containerRow, style.answerTo,
                commentAlien ? style.commentLeftSelf : style.commentRightSelf]}>
                <Icon size={15} name="arrows-split-up-and-left" />
                <Text>
                  {commentAlien ? user.nickname : "Your"} answer to {answerComment.user.nickname}
                </Text>
              </View>
              <Card
                style={style.answerComment}>
                <Card.Content>
                  <Text>{answerComment?.comment}</Text>
                </Card.Content>
              </Card>
            </View>
            : undefined
        }
        <Card style={[style.comment, commentAlien ? style.commentLeftSelf : style.commentRightSelf]}>
          <Card.Content>
            <Text>{comment}</Text>
          </Card.Content>
        </Card>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerRow: {
    display: "flex",
    flexDirection: "row"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "80%"
  },
  commentLeftSelf: {
    alignSelf: "flex-start"
  },
  commentRightSelf: {
    alignSelf: "flex-end"
  },
  commentRightSelfReverse: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse"
  },
  commentRight: {
    justifyContent: "flex-end"
  }
  ,
  commentLeft: {
    justifyContent: "flex-end"
  },
  insideContainer: {
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "column",
    marginHorizontal: 6
  },
  answerContainer: {
    position: "relative",
    marginBottom: -20
  },
  answerComment: {
    backgroundColor: color.magenta,
    paddingBottom: 10,
    maxHeight: 100

  },
  comment: {
    marginHorizontal: 10,
    backgroundColor: color.Hex
  },
  answerTo: {
    marginVertical: 6,
    gap: 6
  },
});

export default Comment;
