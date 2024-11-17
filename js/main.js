var arr = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    author: "― Oscar Wilde",
  },
  {
    quote: `“So many books, so little time.”`,
    author: "―  Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  { quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "―  Albert Einstein" },
  {
    quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    author: "― Andre Gide, Autumn Leaves",
  },
  {
    quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    author: "― Marilyn Monroe",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    author: "― Maya Angelou",
  },
  {
    quote:
      '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
    author: "― C.S. Lewis, The Four Loves",
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: "― Mark Twain",
  },
  {
    quote: `“Don’t walk in front of me… I may not follow
  Don’t walk behind me… I may not lead
  Walk beside me… just be my friend”`,
    author: "― Albert Camus",
  },
];

function quote() {
  var i = Number.parseInt(Math.random() * arr.length);
  document.getElementById("quote").textContent = `${arr[i].quote}`;
  document.getElementById("author").textContent = `${arr[i].author}`;
}
