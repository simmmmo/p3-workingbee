import TileCard from "./Cards/TileCard";

const posts = [
  {
    title: "WorkingBee Title",
    href: "#",
    category: { name: "Animal", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg",
    readingTime: "11.30am",
    author: {
      name: "RSPCA",
      href: "#",
      imageUrl:
        "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg",
    },
  },
  {
    title: "WorkingBee Title",
    href: "#",
    category: { name: "Education", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg",
    readingTime: "11.30am",
    author: {
      name: "Surreyhill Primary",
      href: "#",
      imageUrl:
        "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Emergency", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg",
    readingTime: "11.30am",
    author: {
      name: "Covid Relief",
      href: "#",
      imageUrl:
        "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg",
    },
  },
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Sporting", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg",
    readingTime: "6 min",
    author: {
      name: "Under 12s Football club",
      href: "#",
      imageUrl:
        "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg",
    },
  },
  {
    title: "WorkingBee Title",
    href: "#",
    category: { name: "Other", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg",
    readingTime: "11.30am",
    author: {
      name: "Yarra Clean up",
      href: "#",
      imageUrl:
        "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg",
    },
  },
  {
    title: "WorkingBee Title",
    href: "#",
    category: { name: "Nonprofits & Charities", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-gardening-placeholder.jpg",
    readingTime: "11.30am",
    author: {
      name: "Womens Refuge",
      href: "#",
      imageUrl:
        "https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/working-bee/working-bee-icon-placeholder.jpg",
    },
  },
];

const pageContent = {
  title: "Latest Community Events",
  intro:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.",
};

export default function EventList({ children }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {pageContent.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {pageContent.intro}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* <TileCard />  */} {children}
        </div>
      </div>
    </div>
  );
}
