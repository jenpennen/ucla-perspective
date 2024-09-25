import ClubSummary, { ClubFull } from "./Club";

const props = [
  {
    id: 1,
    tag: "Social",
    name: "Disney Club",
    pres: "Sarah Kim",
    vice: "Priya Gupta",
    upcoming: "Princess and the Frog Movie Night",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi dolorem? Illo, eaque. Quidem possimus neque nam voluptas sunt sed incidunt! Aut voluptatem neque facilis iure nam, error et magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dignissimos ducimus voluptatibus. Molestiae enim animi corrupti ipsa doloribus labore suscipit magnam cumque, itaque, asperiores fuga beatae et facilis voluptatum esse!",
  },
  {
    id: 2,
    tag: "Career Development",
    name: "UCLA DevX",
    pres: "Sarah Kim",
    vice: "Priya Gupta",
    upcoming: "Boba Social at ShareTea",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, minus modi. Earum cumque, eos in voluptatum ex omnis, nesciunt dolore doloribus rerum nobis voluptatibus temporibus iste quo iure ab. Repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate labore nemo maiores voluptates architecto pariatur, repellat voluptatibus, earum ducimus quos illo similique! Dicta fugiat id sunt eius inventore provident.",
  },
  {
    id: 3,
    tag: "Cultural",
    name: "Samahang Pilipino",
    pres: "Sarah Kim",
    vice: "Priya Gupta",
    upcoming: "Beach Day at Newport",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 4,
    tag: "Recreational",
    name: "Running Club",
    pres: "Joe Bruin",
    vice: "Timothy S.",
    upcoming: "Beach Day at Newport",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 5,
    tag: "Recreational",
    name: "Ballroom Club",
    pres: "Josie Bruin",
    vice: "Walter G.",
    upcoming: "Dance Party at Pauley",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 6,
    tag: "Academic",
    name: "Book Club",
    pres: "Josie Bruin",
    vice: "Walter G.",
    upcoming: "Dance Party at Pauley",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 7,
    tag: "Cultural",
    name: "Korean American Student Association",
    pres: "Josie Bruin",
    vice: "Walter G.",
    upcoming: "Dance Party at Pauley",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 8,
    tag: "Cultural",
    name: "Chinese American Association",
    pres: "Josie Bruin",
    vice: "Walter G.",
    upcoming: "Dance Party at Pauley",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 9,
    tag: "Recreational",
    name: "Anime Club",
    pres: "Josie Bruin",
    vice: "Walter G.",
    upcoming: "Dance Party at Pauley",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
  {
    id: 10,
    tag: "Recreational",
    name: "DF",
    pres: "Josie Bruin",
    vice: "Walter G.",
    upcoming: "Dance Party at Pauley",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
  },
];

export default function PropAll(prop) {
  const listItems = props.filter((element) => {
    if (prop.inputName === "" && prop.inputTag === "All") {
      return element;
    } else if (prop.inputName === "" && prop.inputTag !== "All") {
      return element.tag.toLowerCase().includes(prop.inputTag.toLowerCase());
    } else if (prop.inputName !== "" && prop.inputTag === "All") {
      return element.name
        .toLowerCase()
        .startsWith(prop.inputName.toLowerCase());
    } else {
      return (
        element.name.toLowerCase().startsWith(prop.inputName.toLowerCase()) &&
        element.tag.toLowerCase().includes(prop.inputTag.toLowerCase())
      );
    }
  });

  return (
    <div style={{ all: "inherit" }}>
      {listItems.map((item) => (
        <ClubFull {...item} />
      ))}
    </div>
  );
}

export function PropSummary() {
  return (
    <div>
      <ClubSummary {...props[0]} />
      <br style={{ height: "20px" }} />
      <ClubSummary {...props[1]} />
    </div>
  );
}
