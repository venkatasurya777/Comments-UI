import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
        <h4>Warning!</h4>
        Are u sure u wan't to proceed</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Surya"
          time="6:00PM"
          description="Wow thats cool!"
          imageAvatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jennifer"
          time="5:00PM"
          description="I like this!"
          imageAvatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sanika"
          time="12:00PM"
          description="First comment:)"
          imageAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
