export default function Stories() {
  const allStories = [
    { name: "holly", image: "img/holly.png" },
    { name: "todd", image: "img/todd.png" },
    { name: "diane", image: "img/diane.jpg" },
    { name: "princess", image: "img/princess.png" },
    { name: "kelsey", image: "img/kelsey.png" },
    { name: "sarah", image: "img/sarah.jpg" },
    { name: "ana", image: "img/ana.jpg" },
    { name: "rutabaga", image: "img/rutabaga.png" }
  ];

  return (
    <div>
      <div class="stories">
        <div class="seta">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        {allStories.map(Story)}
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="story-icone">
        <img src={props.image} alt={props.name} />
      </div>
      <div class="story-user">
        <p>{props.name}</p>
      </div>
    </div>
  );
}
