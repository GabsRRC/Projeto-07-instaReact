import React from "react";

export default function Feed() {
  const allPosts = [
    {
      userIcon: "img/bojack.jpg",
      userName: "bojack",
      post: "img/post01.jpg",
      followerIcon: "img/todd.png",
      followerName: "todd",
      numLikes: "102.099"
    },
    {
      userIcon: "img/netflix.png",
      userName: "netflix",
      post: "img/post02.jpg",
      followerIcon: "img/holly.png",
      followerName: "holly",
      numLikes: "1.405.432"
    },
    {
      userIcon: "img/brod.png",
      userName: "broadway",
      post: "img/post03.jpg",
      followerIcon: "img/kelsey.png",
      followerName: "kelsey",
      numLikes: "217.092"
    }
  ];

  return <div>{allPosts.map(Posts)}</div>;
}

function Posts(props) {
  const [likedIcon, setlikedIcon] = React.useState("heart-outline");
  const [colorIcon, setcolorIcon] = React.useState("");
  function likePost() {
    if (likedIcon === "heart-outline") {
      setlikedIcon("heart");
      setcolorIcon("liked");
    } else {
      setlikedIcon("heart-outline");
      setcolorIcon("");
    }
  }

  return (
    <div class="post">
      <div class="post-head">
        <div class="head-left">
          <img src={props.userIcon} alt="img" />
          <p>
            <b>{props.userName}</b>
          </p>
        </div>
        <div class="head-right">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <img src={props.post} alt="img" onClick={likePost} />

      <div class="post-foot">
        <div>
          <div>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="chatbubble-outline"></ion-icon>
          </div>
          <div className={colorIcon}>
            <ion-icon onClick={likePost} name={likedIcon}></ion-icon>
          </div>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="post-comments">
        <img src={props.followerIcon} alt="img" />
        <p>
          Curtido por <b>{props.followerName}</b> e{" "}
          <b>outras {props.numLikes} pessoas</b>
        </p>
      </div>
    </div>
  );
}
