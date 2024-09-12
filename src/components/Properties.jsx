import ClubSummary, {ClubFull} from "./Club";

const props = [
    {   
        tag: "Social",
        name: "Disney Club",
        pres: 'Sarah Kim',
        vice: "Priya Gupta",
        upcoming: "Princess and the Frog Movie Night",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi dolorem? Illo, eaque. Quidem possimus neque nam voluptas sunt sed incidunt! Aut voluptatem neque facilis iure nam, error et magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dignissimos ducimus voluptatibus. Molestiae enim animi corrupti ipsa doloribus labore suscipit magnam cumque, itaque, asperiores fuga beatae et facilis voluptatum esse!",
    },
    {
        tag: "Career Development",
        name: "UCLA DevX",
        pres: 'Sarah Kim',
        vice: "Priya Gupta",
        upcoming: "Boba Social at ShareTea",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, minus modi. Earum cumque, eos in voluptatum ex omnis, nesciunt dolore doloribus rerum nobis voluptatibus temporibus iste quo iure ab. Repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate labore nemo maiores voluptates architecto pariatur, repellat voluptatibus, earum ducimus quos illo similique! Dicta fugiat id sunt eius inventore provident.",
    },
    {
        tag: "Cultural",
        name: "Samahang Pilipino",
        pres: 'Sarah Kim',
        vice: "Priya Gupta",
        upcoming: "Beach Day at Newport",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
    },
    {
        tag: "Recreational",
        name: "Running Club",
        pres: 'Joe Bruin',
        vice: "Timothy S.",
        upcoming: "Beach Day at Newport",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tenetur deserunt veritatis ab corporis, magni iusto molestiae at, tempore consequatur architecto. Quo, autem? Quia veniam nesciunt hic fugiat enim quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repudiandae a quasi reprehenderit quam dicta et fugit molestias illo! Voluptatem libero similique beatae minima recusandae dicta, odio harum magni magnam.",
    },
]

export default function PropAll() {
    const listItems = props.map((element) => {
        return (
            <ClubFull {...element}/>
        );
    });
    return <div style={{all: 'inherit'}}>{listItems}</div>;
}

export function PropSummary() {
    return (
        <div>
            <ClubSummary {...props[0]}/>
            <br style={{height:'25px'}}/>
            <ClubSummary {...props[1]}/>
        </div>
    );
}